import _noop from "lodash/noop";
import PropTypes from "prop-types";
import React, { memo } from "react";
import UiRenderer from "../uiRenderer/UiRenderer";
import useFormState from "../hooks/useFormState";
import useFormSubmission from "../hooks/useFormSubmission";
import Field from "./component/field";

const FormWithSubmission = (props) => {
  const { fieldConfig, sections, onSubmit, formId, initialValues, view } = props;

  const [formState, handleFormChange] = useFormState(initialValues);
  const { formConfig } = useFormSubmission({
    formState,
    formId,
    onSubmit,
    fieldConfig,
  });

  return (
    <UiRenderer
      fieldConfig={formConfig}
      sections={sections}
      formState={formState}
      onChange={handleFormChange}
      component={Field}
      view={view}
    />
  );
};

UiRenderer.propTypes = {
  fieldConfig: PropTypes.object,
  sections: PropTypes.array,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};
UiRenderer.defaultProps = {
  fieldConfig: {},
  sections: [],
  onSubmit: _noop,
  initialValues: {},
};

export default memo(FormWithSubmission);
