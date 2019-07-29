package grpcform

import (
	"context"
	"net"
	"regexp"
	"strconv"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type ModelFunc func() *Form

type SendFunc func(context.Context, *Form) (*SendFormResponse, error)

func New() ProxyServer {
	return make(map[string]element)
}

func (s ProxyServer) Add(model ModelFunc, send SendFunc) {
	safe.Lock()
	s[model().GetName()] = element{model: model, send: send}
	safe.Unlock()
}

var (
	safe sync.Mutex
)

type ProxyServer map[string]element

type element struct {
	model ModelFunc
	send  SendFunc
}

func (s ProxyServer) Start(host string) error {
	lis, err := net.Listen("tcp", host)
	if err != nil {
		return err
	}
	gs := grpc.NewServer()
	RegisterFormServiceServer(gs, s)
	reflection.Register(gs)
	if err := gs.Serve(lis); err != nil {
		return err
	}
	return nil
}

func (s ProxyServer) GetForm(ctx context.Context, req *GetFormRequest) (
	*Form,
	error,
) {
	safe.Lock()
	defer safe.Unlock()
	for _, e := range s {
		if req.GetName() == e.model().GetName() {
			return e.model(), nil
		}
	}
	return &Form{}, nil
}

func (s ProxyServer) ValidateForm(ctx context.Context, in *Form) (
	*Form,
	error,
) {
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
			validate(inFields, outField, activeIf.GetValidators(),
				FieldStatus_FIELD_STATUS_ACTIVE)
		}
		if requiredIf := outField.GetRequiredIf(); requiredIf != nil {
			validate(inFields, outField, requiredIf.GetValidators(),
				FieldStatus_FIELD_STATUS_REQUIRED)
		}
		if disabledIf := outField.GetDisabledIf(); disabledIf != nil {
			validate(inFields, outField, disabledIf.GetValidators(),
				FieldStatus_FIELD_STATUS_DISABLED)
		}
		if hiddenIf := outField.GetHiddenIf(); hiddenIf != nil {
			validate(inFields, outField, hiddenIf.GetValidators(),
				FieldStatus_FIELD_STATUS_HIDDEN)
		}
		if inTextField := inField.GetTextField(); hasStatus(outField.GetStatus(),
			FieldStatus_FIELD_STATUS_ACTIVE, FieldStatus_FIELD_STATUS_REQUIRED) &&
			inTextField != nil {
			outTextField := outField.GetTextField()
			outTextField.Value = inTextField.GetValue()
			if !out.Valid ||
				outField.GetStatus() == FieldStatus_FIELD_STATUS_UNSPECIFIED ||
				(outField.GetStatus() == FieldStatus_FIELD_STATUS_ACTIVE &&
					outTextField.Value == "") {
				continue
			}
			if int64(len(outTextField.GetValue())) < outTextField.GetMin() {
				outField.Error = outTextField.GetMinError()
				out.Valid = false
				continue
			}
			if int64(len(outTextField.GetValue())) > outTextField.GetMax() {
				outField.Error = outTextField.GetMaxError()
				out.Valid = false
				continue
			}
			if ok, err := regexp.MatchString(outTextField.GetRegex(),
				outTextField.GetValue()); !ok || err != nil {
				outField.Error = outTextField.GetRegexError()
				out.Valid = false
				continue
			}
		}
		if inSelectField := inField.GetSelectField(); hasStatus(outField.GetStatus(),
			FieldStatus_FIELD_STATUS_ACTIVE, FieldStatus_FIELD_STATUS_REQUIRED) &&
			inSelectField != nil {
			outSelectField := outField.GetSelectField()
			outSelectField.Index = inSelectField.GetIndex()
			if !out.Valid || (outField.GetStatus() == FieldStatus_FIELD_STATUS_ACTIVE &&
				outSelectField.GetIndex() == 0) {
				continue
			}
			check := false
			for _, o := range outSelectField.GetOptions() {
				if o.GetIndex() == outSelectField.GetIndex() {
					check = true
					continue
				}
			}
			if !check {
				outField.Error = outSelectField.GetError()
				out.Valid = false
				continue
			}
		}
		if inNumericField := inField.GetNumericField(); hasStatus(outField.GetStatus(),
			FieldStatus_FIELD_STATUS_ACTIVE, FieldStatus_FIELD_STATUS_REQUIRED) &&
			inNumericField != nil {
			outSlider := outField.GetNumericField()
			outSlider.Value = inNumericField.GetValue()
			if !out.Valid || (outField.GetStatus() == FieldStatus_FIELD_STATUS_ACTIVE &&
				outSlider.Value == 0) {
				continue
			}
			v := outSlider.GetValue()
			if int64(v) < outSlider.GetMin() {
				outField.Error = outSlider.GetMinError()
				out.Valid = false
				continue
			}
			if hasStatus(outField.GetStatus(),
				FieldStatus_FIELD_STATUS_ACTIVE, FieldStatus_FIELD_STATUS_REQUIRED) &&
				int64(v) > outSlider.GetMax() {
				outField.Error = outSlider.GetMaxError()
				out.Valid = false
				continue
			}
		}
	}
	if out.GetValid() {
		for _, b := range out.GetButtons() {
			b.Status = ButtonStatus_BUTTON_ACTIVE
		}
	}
	return out, nil
}

func (s ProxyServer) SendForm(ctx context.Context, in *Form) (
	res *SendFormResponse,
	err error,
) {
	out, err := s.ValidateForm(ctx, in)
	if err != nil {
		return &SendFormResponse{Form: out}, nil
	}
	return s[out.GetName()].send(ctx, out)
}

func validate(inFields []*Field, outField *Field, validators []*Validator, status FieldStatus) {
	for _, validator := range validators {
		index := validator.GetIndex()
		if textField := inFields[index].GetTextField(); textField != nil &&
			!validTextField(textField, validator) {
			outField.Status = status
			return
		}

		if numericField := inFields[index].GetNumericField(); numericField != nil &&
			!validNumericField(numericField, validator) {
			outField.Status = status
			return
		}
		if selectField := inFields[index].GetSelectField(); selectField != nil &&
			!validSelectField(selectField, validator) {
			outField.Status = status
			return
		}
	}
}

func validTextField(textField *TextField, validator *Validator) bool {
	if v := validator.GetEqualText(); v != "" && v == textField.GetValue() {
		return false
	}
	if v := validator.GetSmallerThanLength(); v != 0 && v > int64(len(textField.GetValue())) {
		return false
	}
	if v := validator.GetGreterThanLength(); v != 0 && v < int64(len(textField.GetValue())) {
		return false
	}
	if v := validator.GetRegex(); v != "" {
		if ok, err := regexp.MatchString(v, textField.GetValue()); !ok || err != nil {
			return false
		}
	}
	return true
}

func validNumericField(numericField *NumericField, validator *Validator) bool {
	if v := validator.GetEqualNumber(); v != 0 && v == numericField.GetValue() {
		return false
	}
	if v := validator.GetSmallerThanNumber(); v != 0 && v > numericField.GetValue() {
		return false
	}
	if v := validator.GetGreaterThanNumber(); v != 0 && v < numericField.GetValue() {
		return false
	}
	if v := validator.GetRegex(); v != "" {
		if ok, err := regexp.MatchString(v, strconv.Itoa(int(numericField.GetValue()))); !ok ||
			err != nil {
			return false
		}
	}
	return true
}

func validSelectField(selectField *SelectField, validator *Validator) bool {
	if text := validator.GetEqualText(); text != "" {
		if getOption(selectField.GetIndex(), selectField.GetOptions()) != nil {
			return false
		}
		return false
	}
	if regex := validator.GetRegex(); regex != "" {
		if ok, err := regexp.MatchString(regex, getOption(selectField.GetIndex(),
			selectField.GetOptions()).GetValue()); !ok || err != nil {
			return false
		}
	}
	return true
}

func getOption(option int64, options []*Option) *Option {
	for _, o := range options {
		if o.GetIndex() == option {
			return o
		}
	}
	return nil
}

func hasStatus(is FieldStatus, within ...FieldStatus) bool {
	for _, s := range within {
		if s == is {
			return true
		}
	}
	return false
}
