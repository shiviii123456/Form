import React from "react";
import UiRenderer from "../uiRenderer";
import { FORM_CONFIG } from "./constants/form.formConfig";
import { SECTIONS } from "./constants/form.section";
import FormWithSubmission from "../formWithSubmission";
import { triggerSubmit } from "../formWithSubmission/helpers/formWithSubmission.formAction";

import styles from "./form.module.scss";
import useLoader from "../hooks/useLoader";

const Form = (props) => {
  const { view } = props;
  const { isFetching, toggleLoading } = useLoader();

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    toggleLoading(true);

    setTimeout(() => {
      toggleLoading(false);
    }, 1000);
  };

  const onClick = () => {
    triggerSubmit("abc");
  };

  return (
    <div className={styles.formContainer}>
      <FormWithSubmission
        sections={SECTIONS}
        fieldConfig={FORM_CONFIG}
        onSubmit={handleSubmit}
        formId="abc"
        view={view}
      />
      <button onClick={onClick} disabled={isFetching}>
        {isFetching ? "loading" : "Save"}
      </button>
    </div>
  );
};

export default Form;
