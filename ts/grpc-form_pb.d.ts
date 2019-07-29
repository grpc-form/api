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

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getInstantValidate(): boolean;
  setInstantValidate(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  hasTextField(): boolean;
  clearTextField(): void;
  getTextField(): TextField | undefined;
  setTextField(value?: TextField): void;

  hasSelectField(): boolean;
  clearSelectField(): void;
  getSelectField(): SelectField | undefined;
  setSelectField(value?: SelectField): void;

  hasNumericField(): boolean;
  clearNumericField(): void;
  getNumericField(): NumericField | undefined;
  setNumericField(value?: NumericField): void;

  hasActiveif(): boolean;
  clearActiveif(): void;
  getActiveif(): ActiveIf | undefined;
  setActiveif(value?: ActiveIf): void;

  hasRequiredIf(): boolean;
  clearRequiredIf(): void;
  getRequiredIf(): RequiredIf | undefined;
  setRequiredIf(value?: RequiredIf): void;

  hasDisabledIf(): boolean;
  clearDisabledIf(): void;
  getDisabledIf(): DisabledIf | undefined;
  setDisabledIf(value?: DisabledIf): void;

  hasHiddenIf(): boolean;
  clearHiddenIf(): void;
  getHiddenIf(): HiddenIf | undefined;
  setHiddenIf(value?: HiddenIf): void;

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
    status: StatusMap[keyof StatusMap],
    instantValidate: boolean,
    error: string,
    textField?: TextField.AsObject,
    selectField?: SelectField.AsObject,
    numericField?: NumericField.AsObject,
    activeif?: ActiveIf.AsObject,
    requiredIf?: RequiredIf.AsObject,
    disabledIf?: DisabledIf.AsObject,
    hiddenIf?: HiddenIf.AsObject,
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

  getSmallerThanLength(): number;
  setSmallerThanLength(value: number): void;

  getGreterThanLength(): number;
  setGreterThanLength(value: number): void;

  getEqualNumber(): number;
  setEqualNumber(value: number): void;

  getSmallerThanNumber(): number;
  setSmallerThanNumber(value: number): void;

  getGreaterThanNumber(): number;
  setGreaterThanNumber(value: number): void;

  hasEqualOption(): boolean;
  clearEqualOption(): void;
  getEqualOption(): Option | undefined;
  setEqualOption(value?: Option): void;

  getRegex(): string;
  setRegex(value: string): void;

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
    smallerThanLength: number,
    greterThanLength: number,
    equalNumber: number,
    smallerThanNumber: number,
    greaterThanNumber: number,
    equalOption?: Option.AsObject,
    regex: string,
  }
}

export class TextField extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(value?: Option, index?: number): Option;

  getMin(): number;
  setMin(value: number): void;

  getMinError(): string;
  setMinError(value: string): void;

  getMax(): number;
  setMax(value: number): void;

  getMaxError(): string;
  setMaxError(value: string): void;

  getRegex(): string;
  setRegex(value: string): void;

  getRegexError(): string;
  setRegexError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextField.AsObject;
  static toObject(includeInstance: boolean, msg: TextField): TextField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextField;
  static deserializeBinaryFromReader(message: TextField, reader: jspb.BinaryReader): TextField;
}

export namespace TextField {
  export type AsObject = {
    value: string,
    optionsList: Array<Option.AsObject>,
    min: number,
    minError: string,
    max: number,
    maxError: string,
    regex: string,
    regexError: string,
  }
}

export class SelectField extends jspb.Message {
  hasOption(): boolean;
  clearOption(): void;
  getOption(): Option | undefined;
  setOption(value?: Option): void;

  getType(): SelectTypeMap[keyof SelectTypeMap];
  setType(value: SelectTypeMap[keyof SelectTypeMap]): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(value?: Option, index?: number): Option;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectField.AsObject;
  static toObject(includeInstance: boolean, msg: SelectField): SelectField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectField;
  static deserializeBinaryFromReader(message: SelectField, reader: jspb.BinaryReader): SelectField;
}

export namespace SelectField {
  export type AsObject = {
    option?: Option.AsObject,
    type: SelectTypeMap[keyof SelectTypeMap],
    optionsList: Array<Option.AsObject>,
    error: string,
  }
}

export class NumericField extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getStep(): number;
  setStep(value: number): void;

  getMin(): number;
  setMin(value: number): void;

  getMinError(): string;
  setMinError(value: string): void;

  getMax(): number;
  setMax(value: number): void;

  getMaxError(): string;
  setMaxError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericField.AsObject;
  static toObject(includeInstance: boolean, msg: NumericField): NumericField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericField;
  static deserializeBinaryFromReader(message: NumericField, reader: jspb.BinaryReader): NumericField;
}

export namespace NumericField {
  export type AsObject = {
    value: number,
    step: number,
    min: number,
    minError: string,
    max: number,
    maxError: string,
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

export class Button extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getType(): ButtonFuncTypeMap[keyof ButtonFuncTypeMap];
  setType(value: ButtonFuncTypeMap[keyof ButtonFuncTypeMap]): void;

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
    status: StatusMap[keyof StatusMap],
    type: ButtonFuncTypeMap[keyof ButtonFuncTypeMap],
  }
}

export interface StatusMap {
  STATUS_UNSPECIFIED: 0;
  ACTIVE: 1;
  REQUIRED: 2;
  DISABLED: 3;
  HIDDEN: 4;
}

export const Status: StatusMap;

export interface SelectTypeMap {
  SELECT_TYPE_UNSPECIFIED: 0;
  SIMPLE: 1;
  MULTI: 2;
}

export const SelectType: SelectTypeMap;

export interface ButtonFuncTypeMap {
  BUTTON_FUNC_UNSPECIFIED: 0;
  VALIDATE: 1;
  RESET: 2;
  SEND: 3;
}

export const ButtonFuncType: ButtonFuncTypeMap;

