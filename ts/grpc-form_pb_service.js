// package: grpcform
// file: grpc-form.proto

var grpc_form_pb = require("./grpc-form_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FormService = (function () {
  function FormService() {}
  FormService.serviceName = "grpcform.FormService";
  return FormService;
}());

FormService.GetForm = {
  methodName: "GetForm",
  service: FormService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_form_pb.GetFormRequest,
  responseType: grpc_form_pb.Form
};

FormService.ValidateForm = {
  methodName: "ValidateForm",
  service: FormService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_form_pb.Form,
  responseType: grpc_form_pb.Form
};

FormService.SendForm = {
  methodName: "SendForm",
  service: FormService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_form_pb.Form,
  responseType: grpc_form_pb.SendFormResponse
};

exports.FormService = FormService;

function FormServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FormServiceClient.prototype.getForm = function getForm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FormService.GetForm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FormServiceClient.prototype.validateForm = function validateForm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FormService.ValidateForm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FormServiceClient.prototype.sendForm = function sendForm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FormService.SendForm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.FormServiceClient = FormServiceClient;

