import _mapValues from "lodash/mapValues";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { addRenderOptions } from "./formWithSubmission.addRenderOptions";
import _some from "lodash/some";

const validateRequiredField = ({ field, formValue, required, validations }) => {
  if (_isEmpty(formValue) && required) {
    const updatedField = addRenderOptions(field, {
      error: "Field is required",
    });
    return updatedField;
  }
  if (validations && validations(formValue)) {
    const updatedField = addRenderOptions(field, {
      error: "Field is incorrect",
    });
    return updatedField;
  }
  return field;
};

const getValidatedFormField = (formState) => (field, fieldId) => {
  const formValue = _get(formState, fieldId);
  const { renderOption } = field;
  const { required, validations } = renderOption || {};
  return validateRequiredField({ formValue, field, required, validations });
};

const hasFormFieldError = (field) => {
  const { renderOption } = field;
  const { error } = renderOption || {};
  return !_isEmpty(error);
};

export const validateFormField = (formState, fieldConfig) => {
  const updatedFieldConfig = _mapValues(
    fieldConfig,
    getValidatedFormField(formState)
  );
  const hasError = _some(updatedFieldConfig, hasFormFieldError);
  return { updatedFieldConfig, hasError };
};
