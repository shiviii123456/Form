import React, { memo } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";

const Column = (props) => {
  const {
    id,
    fieldConfig,
    component: Comp,
    formState,
    onChange,
    ...restProps
  } = props;

  const field = _get(fieldConfig, id, {}); 

  const { renderer: Component, renderOptions } = field;
  
  if (Comp){
    console.log("sima ji")
    return (
      <Comp {...field} formState={formState} onChange={onChange} fieldId={id} />
    );
  }

  return <Component {...renderOptions} {...restProps} />;
};

Column.propTypes = {
  id: PropTypes.string,
  fieldConfig: PropTypes.object,
};
Column.defaultProps = {
  id: undefined,
  fieldConfig: {},
};

export default memo(Column);
