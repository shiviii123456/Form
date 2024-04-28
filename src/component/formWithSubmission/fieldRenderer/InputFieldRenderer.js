import { rest } from "lodash";
import React, { useCallback } from "react";

const InputFieldRenderer = (props) => {
  const { onChange, ...restProps } = props;
  console.log({...restProps})
  console.log(props.view)
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return <input {...restProps} onChange={handleChange} />;
};

export default InputFieldRenderer;
