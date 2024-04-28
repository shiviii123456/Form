import React, { useCallback, useMemo } from "react";
import _get from "lodash/get";

const Field = (props) => {
  const {
    renderer: Component,
    fieldId,
    formState,
    renderOption,
    onChange,
  } = props;

  const { error } = renderOption;

  const value = useMemo(() => _get(formState, fieldId), [formState, fieldId]);

  const handleChange = useCallback(
    (value) => {
      onChange(fieldId, value);
    },
    [fieldId, onChange]
  );

  return (
    <>
      <Component {...renderOption} value={value} onChange={handleChange} />
      {error && <div>{error}</div>}
    </>
  );
};

export default Field;
