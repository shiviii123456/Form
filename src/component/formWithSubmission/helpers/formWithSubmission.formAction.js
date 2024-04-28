import EventEmitter from "eventemitter3";

const formEmitter = new EventEmitter();

export const triggerSubmit = (formId) => {
  formEmitter.emit(formId);
};

export const subscribeSubmit = (formId, onSubmit) => {
  formEmitter.on(formId, onSubmit);
};

