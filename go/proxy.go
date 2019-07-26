package grpcform

import (
	"context"
	"net"
	"regexp"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type ModelFunc func() *Form

type SendFunc func(context.Context, *Form) (*SendFormResponse, error)

func New() server {
	return make(map[string]element)
}

func (s server) Add(model ModelFunc, send SendFunc) {
	safe.Lock()
	s[model().GetName()] = element{model: model, send: send}
	safe.Unlock()
}

var (
	safe sync.Mutex
)

type server map[string]element

type element struct {
	model ModelFunc
	send  SendFunc
}

func (s server) Start(host string) {
	lis, err := net.Listen("tcp", host)
	if err != nil {
		panic(err)
	}
	gs := grpc.NewServer()
	RegisterFormServiceServer(gs, s)
	reflection.Register(gs)
	if err := gs.Serve(lis); err != nil {
		panic(err)
	}
}

func (s server) GetForm(ctx context.Context, req *GetFormRequest) (*Form, error) {
	safe.Lock()
	defer safe.Unlock()
	for _, e := range s {
		if req.GetName() == e.model().GetName() {
			return e.model(), nil
		}
	}
	return &Form{}, nil
}

func (s server) ValidateForm(ctx context.Context, in *Form) (*Form, error) {
	out, err := s.GetForm(ctx, &GetFormRequest{Name: in.GetName()})
	if err != nil || in == nil || len(out.GetFields()) != len(in.GetFields()) {
		return &Form{}, nil
	}
	out.Valid = true
	outFields := out.GetFields()
	inFields := in.GetFields()
	for i, inField := range inFields {
		outField := outFields[i]
		if activeIf := outField.GetActiveIf(); activeIf != nil {
			validateIf(inFields, outField, activeIf.GetValidators(), STATUS_ACTIVE)
		}
		if requiredIf := outField.GetRequiredIf(); requiredIf != nil {
			validateIf(inFields, outField, requiredIf.GetValidators(), STATUS_REQUIRED)
		}
		if disabledIf := outField.GetDisabledIf(); disabledIf != nil {
			validateIf(inFields, outField, disabledIf.GetValidators(), STATUS_DISABLED)
		}
		if hiddenIf := outField.GetHiddenIf(); hiddenIf != nil {
			validateIf(inFields, outField, hiddenIf.GetValidators(), STATUS_HIDDEN)
		}
		if inInput := inField.GetInput(); hasStatus(outField.GetStatus(), STATUS_ACTIVE, STATUS_REQUIRED) && inInput != nil {
			outInput := outField.GetInput()
			outInput.Value = inInput.GetValue()
			if outField.GetStatus() == STATUS_ACTIVE && outInput.Value == "" {
				continue
			}
			if min := outInput.GetMinLength(); int64(len(outInput.GetValue())) < min.GetValue() {
				outField.Error = min.GetError()
				out.Valid = false
				return out, nil
			}
			if max := outInput.GetMaxLength(); int64(len(outInput.GetValue())) > max.GetValue() {
				outField.Error = max.GetError()
				out.Valid = false
				return out, nil
			}
			if ok, err := regexp.MatchString(outInput.GetRegex().GetValue(), outInput.GetValue()); !ok || err != nil {
				outField.Error = outInput.GetRegex().GetError()
				out.Valid = false
				return out, nil
			}
		}
		if inRadioGroup := inField.GetRadioGroup(); hasStatus(outField.GetStatus(), STATUS_ACTIVE, STATUS_REQUIRED) && inRadioGroup != nil {
			outRadioGroup := outField.GetRadioGroup()
			outRadioGroup.Value = inRadioGroup.GetValue()
			if outField.GetStatus() == STATUS_ACTIVE && outRadioGroup.Value == nil {
				continue
			}
			option := inRadioGroup.GetValue()
			check := false
			for _, o := range outRadioGroup.GetOptions() {
				if o.GetIndex() == option.GetIndex() && o.GetValue() == option.GetValue() {
					check = true
				}
			}
			if !check {
				outField.Error = "RadioGroup Option Error"
				out.Valid = false
				return out, nil
			}
		}
		if inSelect := inField.GetSelect(); hasStatus(outField.GetStatus(), STATUS_ACTIVE, STATUS_REQUIRED) && inSelect != nil {
			outSelect := outField.GetSelect()
			outSelect.Value = inSelect.GetValue()
			if outField.GetStatus() == STATUS_ACTIVE && outSelect.Value == nil {
				continue
			}
			option := outSelect.GetValue()
			check := false
			for _, o := range outSelect.GetOptions() {
				if o.GetIndex() == option.GetIndex() && o.GetValue() == option.GetValue() {
					check = true
				}
			}
			if !check {
				outField.Error = "Select Option Error"
				out.Valid = false
				return out, nil
			}
		}
		if inSlider := inField.GetSlider(); hasStatus(outField.GetStatus(), STATUS_ACTIVE, STATUS_REQUIRED) && inSlider != nil {
			outSlider := outField.GetSlider()
			outSlider.Value = inSlider.GetValue()
			if outField.GetStatus() == STATUS_ACTIVE && outSlider.Value == 0 {
				continue
			}
			v := outSlider.GetValue()
			if int64(v) < outSlider.GetMin() {
				outField.Error = "Slider Min Error"
				out.Valid = false
				return out, nil
			}
			if hasStatus(outField.GetStatus(), STATUS_ACTIVE, STATUS_REQUIRED) && int64(v) > outSlider.GetMax() {
				outField.Error = "Slider Max Error"
				out.Valid = false
				return out, nil
			}
		}
	}
	if out.GetValid() {
		for _, b := range out.GetButtons() {
			b.Status = STATUS_ACTIVE
		}
	}
	return out, nil
}

func (s server) SendForm(ctx context.Context, in *Form) (res *SendFormResponse, err error) {
	out, err := s.ValidateForm(ctx, in)
	if err != nil {
		return s[out.GetName()].send(ctx, out)
	}
	return &SendFormResponse{Form: out}, nil
}

func validateIf(inFields []*Field, outField *Field, validators []*Validator, status STATUS) {
	for _, validator := range validators {
		index := validator.GetIndex()
		if v := validator.GetEqualText(); v != "" && v == inFields[index].GetInput().GetValue() {
			outField.Status = status
		}
		if o := validator.GetEqualOption(); o != nil {
			if value := inFields[index].GetRadioGroup().GetValue(); o.GetIndex() == value.GetIndex() && o.GetValue() == value.GetValue() {
				outField.Status = status
			}
			if value := inFields[index].GetSelect().GetValue(); o.GetIndex() == value.GetIndex() && o.GetValue() == value.GetValue() {
				outField.Status = status
			}
		}
		if v := validator.GetEqualNumber(); v != 0 && v == inFields[index].GetSlider().GetValue() {
			outField.Status = status
		}
		if v := validator.GetSmallerThanNumber(); v != 0 && v > inFields[index].GetSlider().GetValue() {
			outField.Status = status
		}
		if v := validator.GetGreaterThanNumber(); v != 0 && v < inFields[index].GetSlider().GetValue() {
			outField.Status = status
		}
	}
}

func hasStatus(is STATUS, within ...STATUS) bool {
	for _, s := range within {
		if s == is {
			return true
		}
	}
	return false
}
