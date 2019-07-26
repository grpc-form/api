// package: grpcform
// file: grpc-form.proto

import * as grpc_form_pb from "./grpc-form_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FormServiceGetForm = {
  readonly methodName: string;
  readonly service: typeof FormService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_form_pb.GetFormRequest;
  readonly responseType: typeof grpc_form_pb.Form;
};

type FormServiceValidateForm = {
  readonly methodName: string;
  readonly service: typeof FormService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_form_pb.Form;
  readonly responseType: typeof grpc_form_pb.Form;
};

type FormServiceSendForm = {
  readonly methodName: string;
  readonly service: typeof FormService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_form_pb.Form;
  readonly responseType: typeof grpc_form_pb.SendFormResponse;
};

export class FormService {
  static readonly serviceName: string;
  static readonly GetForm: FormServiceGetForm;
  static readonly ValidateForm: FormServiceValidateForm;
  static readonly SendForm: FormServiceSendForm;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class FormServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getForm(
    requestMessage: grpc_form_pb.GetFormRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.Form|null) => void
  ): UnaryResponse;
  getForm(
    requestMessage: grpc_form_pb.GetFormRequest,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.Form|null) => void
  ): UnaryResponse;
  validateForm(
    requestMessage: grpc_form_pb.Form,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.Form|null) => void
  ): UnaryResponse;
  validateForm(
    requestMessage: grpc_form_pb.Form,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.Form|null) => void
  ): UnaryResponse;
  sendForm(
    requestMessage: grpc_form_pb.Form,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.SendFormResponse|null) => void
  ): UnaryResponse;
  sendForm(
    requestMessage: grpc_form_pb.Form,
    callback: (error: ServiceError|null, responseMessage: grpc_form_pb.SendFormResponse|null) => void
  ): UnaryResponse;
}

