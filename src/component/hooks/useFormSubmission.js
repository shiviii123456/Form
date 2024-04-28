import { useCallback, useEffect, useState } from "react";
import { subscribeSubmit } from "../formWithSubmission/helpers/formWithSubmission.formAction";
import { validateFormField } from "../formWithSubmission/helpers/formWithSubmission.validations";

const useFormSubmission = ({ formState, formId, onSubmit, fieldConfig }) => {

  const [formConfig, setFormConfig] = useState(fieldConfig);

  const handleSubmit = useCallback(() => {
    console.log(formState)
    const { updatedFieldConfig, hasError } = validateFormField(
      formState,
      fieldConfig
    );
    if (hasError) {
      onSubmit(formState, hasError);
    }

    setFormConfig(updatedFieldConfig);
  }, [onSubmit, formState, fieldConfig]);

  useEffect(() => {
    subscribeSubmit(formId, handleSubmit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId,handleSubmit]);

  return { formConfig };
};

export default useFormSubmission;

