// package: grpcform
// file: grpc-form.proto

import * as jspb from "google-protobuf";

export class GetFormRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFormRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFormRequest): GetFormRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFormRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFormRequest;
  static deserializeBinaryFromReader(message: GetFormRequest, reader: jspb.BinaryReader): GetFormRequest;
}

export namespace GetFormRequest {
  export type AsObject = {
    name: string,
  }
}

export class SendFormResponse extends jspb.Message {
  hasForm(): boolean;
  clearForm(): void;
  getForm(): Form | undefined;
  setForm(value?: Form): void;

  getSucceed(): boolean;
  setSucceed(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFormResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendFormResponse): SendFormResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFormResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFormResponse;
  static deserializeBinaryFromReader(message: SendFormResponse, reader: jspb.BinaryReader): SendFormResponse;
}

export namespace SendFormResponse {
  export type AsObject = {
    form?: Form.AsObject,
    succeed: boolean,
    message: string,
  }
}

export class Form extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  clearButtonsList(): void;
  getButtonsList(): Array<Button>;
  setButtonsList(value: Array<Button>): void;
  addButtons(value?: Button, index?: number): Button;

  getValid(): boolean;
  setValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Form.AsObject;
  static toObject(includeInstance: boolean, msg: Form): Form.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Form, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Form;
  static deserializeBinaryFromReader(message: Form, reader: jspb.BinaryReader): Form;
}

export namespace Form {
  export type AsObject = {
    name: string,
    fieldsList: Array<Field.AsObject>,
    buttonsList: Array<Button.AsObject>,
    valid: boolean,
  }
}

export class Field extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getStatus(): STATUSMap[keyof STATUSMap];
  setStatus(value: STATUSMap[keyof STATUSMap]): void;

  hasActiveif(): boolean;
  clearActiveif(): void;
  getActiveif(): ActiveIf | undefined;
  setActiveif(value?: ActiveIf): void;

  hasRequiredif(): boolean;
  clearRequiredif(): void;
  getRequiredif(): RequiredIf | undefined;
  setRequiredif(value?: RequiredIf): void;

  hasDisabledif(): boolean;
  clearDisabledif(): void;
  getDisabledif(): DisabledIf | undefined;
  setDisabledif(value?: DisabledIf): void;

  hasHiddenif(): boolean;
  clearHiddenif(): void;
  getHiddenif(): HiddenIf | undefined;
  setHiddenif(value?: HiddenIf): void;

  getInstantValidate(): boolean;
  setInstantValidate(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): Input | undefined;
  setInput(value?: Input): void;

  hasRadioGroup(): boolean;
  clearRadioGroup(): void;
  getRadioGroup(): RadioGroup | undefined;
  setRadioGroup(value?: RadioGroup): void;

  hasSelect(): boolean;
  clearSelect(): void;
  getSelect(): Select | undefined;
  setSelect(value?: Select): void;

  hasSlider(): boolean;
  clearSlider(): void;
  getSlider(): Slider | undefined;
  setSlider(value?: Slider): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    label: string,
    status: STATUSMap[keyof STATUSMap],
    activeif?: ActiveIf.AsObject,
    requiredif?: RequiredIf.AsObject,
    disabledif?: DisabledIf.AsObject,
    hiddenif?: HiddenIf.AsObject,
    instantValidate: boolean,
    error: string,
    input?: Input.AsObject,
    radioGroup?: RadioGroup.AsObject,
    select?: Select.AsObject,
    slider?: Slider.AsObject,
  }
}

export class ActiveIf extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveIf.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveIf): ActiveIf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveIf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveIf;
  static deserializeBinaryFromReader(message: ActiveIf, reader: jspb.BinaryReader): ActiveIf;
}

export namespace ActiveIf {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>,
  }
}

export class RequiredIf extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequiredIf.AsObject;
  static toObject(includeInstance: boolean, msg: RequiredIf): RequiredIf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequiredIf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequiredIf;
  static deserializeBinaryFromReader(message: RequiredIf, reader: jspb.BinaryReader): RequiredIf;
}

export namespace RequiredIf {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>,
  }
}

export class DisabledIf extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisabledIf.AsObject;
  static toObject(includeInstance: boolean, msg: DisabledIf): DisabledIf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisabledIf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisabledIf;
  static deserializeBinaryFromReader(message: DisabledIf, reader: jspb.BinaryReader): DisabledIf;
}

export namespace DisabledIf {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>,
  }
}

export class HiddenIf extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HiddenIf.AsObject;
  static toObject(includeInstance: boolean, msg: HiddenIf): HiddenIf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HiddenIf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HiddenIf;
  static deserializeBinaryFromReader(message: HiddenIf, reader: jspb.BinaryReader): HiddenIf;
}

export namespace HiddenIf {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>,
  }
}

export class Validator extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getEqualText(): string;
  setEqualText(value: string): void;

  hasEqualOption(): boolean;
  clearEqualOption(): void;
  getEqualOption(): Option | undefined;
  setEqualOption(value?: Option): void;

  getEqualNumber(): number;
  setEqualNumber(value: number): void;

  getSmallerThanNumber(): number;
  setSmallerThanNumber(value: number): void;

  getGreaterThanNumber(): number;
  setGreaterThanNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    index: number,
    equalText: string,
    equalOption?: Option.AsObject,
    equalNumber: number,
    smallerThanNumber: number,
    greaterThanNumber: number,
  }
}

export class Input extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getPlaceholder(): string;
  setPlaceholder(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(value?: Option, index?: number): Option;

  hasMinLength(): boolean;
  clearMinLength(): void;
  getMinLength(): MinLength | undefined;
  setMinLength(value?: MinLength): void;

  hasMaxLength(): boolean;
  clearMaxLength(): void;
  getMaxLength(): MaxLength | undefined;
  setMaxLength(value?: MaxLength): void;

  hasRegex(): boolean;
  clearRegex(): void;
  getRegex(): Regex | undefined;
  setRegex(value?: Regex): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    value: string,
    placeholder: string,
    optionsList: Array<Option.AsObject>,
    minLength?: MinLength.AsObject,
    maxLength?: MaxLength.AsObject,
    regex?: Regex.AsObject,
  }
}

export class RadioGroup extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Option | undefined;
  setValue(value?: Option): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RadioGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RadioGroup): RadioGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RadioGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RadioGroup;
  static deserializeBinaryFromReader(message: RadioGroup, reader: jspb.BinaryReader): RadioGroup;
}

export namespace RadioGroup {
  export type AsObject = {
    value?: Option.AsObject,
    optionsList: Array<Option.AsObject>,
  }
}

export class Select extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Option | undefined;
  setValue(value?: Option): void;

  hasPlaceholder(): boolean;
  clearPlaceholder(): void;
  getPlaceholder(): Option | undefined;
  setPlaceholder(value?: Option): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Select.AsObject;
  static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Select;
  static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
}

export namespace Select {
  export type AsObject = {
    value?: Option.AsObject,
    placeholder?: Option.AsObject,
    optionsList: Array<Option.AsObject>,
  }
}

export class Slider extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getStep(): number;
  setStep(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slider.AsObject;
  static toObject(includeInstance: boolean, msg: Slider): Slider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Slider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slider;
  static deserializeBinaryFromReader(message: Slider, reader: jspb.BinaryReader): Slider;
}

export namespace Slider {
  export type AsObject = {
    value: number,
    min: number,
    max: number,
    step: number,
  }
}

export class Option extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    index: number,
    value: string,
  }
}

export class MinLength extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinLength.AsObject;
  static toObject(includeInstance: boolean, msg: MinLength): MinLength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinLength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinLength;
  static deserializeBinaryFromReader(message: MinLength, reader: jspb.BinaryReader): MinLength;
}

export namespace MinLength {
  export type AsObject = {
    value: number,
    error: string,
  }
}

export class MaxLength extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxLength.AsObject;
  static toObject(includeInstance: boolean, msg: MaxLength): MaxLength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxLength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxLength;
  static deserializeBinaryFromReader(message: MaxLength, reader: jspb.BinaryReader): MaxLength;
}

export namespace MaxLength {
  export type AsObject = {
    value: number,
    error: string,
  }
}

export class Regex extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Regex.AsObject;
  static toObject(includeInstance: boolean, msg: Regex): Regex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Regex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Regex;
  static deserializeBinaryFromReader(message: Regex, reader: jspb.BinaryReader): Regex;
}

export namespace Regex {
  export type AsObject = {
    value: string,
    error: string,
  }
}

export class Button extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getStatus(): STATUSMap[keyof STATUSMap];
  setStatus(value: STATUSMap[keyof STATUSMap]): void;

  getButtonFunc(): BUTTON_FUNCMap[keyof BUTTON_FUNCMap];
  setButtonFunc(value: BUTTON_FUNCMap[keyof BUTTON_FUNCMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Button.AsObject;
  static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Button;
  static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
}

export namespace Button {
  export type AsObject = {
    label: string,
    status: STATUSMap[keyof STATUSMap],
    buttonFunc: BUTTON_FUNCMap[keyof BUTTON_FUNCMap],
  }
}

export interface STATUSMap {
  ACTIVE: 0;
  REQUIRED: 1;
  DISABLED: 2;
  HIDDEN: 3;
}

export const STATUS: STATUSMap;

export interface BUTTON_FUNCMap {
  VALIDATE: 0;
  RESET: 1;
  SEND: 2;
}

export const BUTTON_FUNC: BUTTON_FUNCMap;

