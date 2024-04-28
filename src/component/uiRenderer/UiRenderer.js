import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import _map from "lodash/map";
import Section from "./components/section";

const UiRenderer = (props) => {
  const { sections, fieldConfig, ...restProps } = props;
  
  const renderSection = useCallback(
    (section) => (
      <Section {...section} fieldConfig={fieldConfig} {...restProps} />
    ),
    [fieldConfig, restProps]
  );
  return <div>{_map(sections, renderSection)}</div>;
};

UiRenderer.propTypes = {
  sections: PropTypes.array,
  fieldConfig: PropTypes.object,
  view: PropTypes.bool
};

UiRenderer.defaultProps = {
  sections: [],
  fieldConfig: {},
  view:false
};

export default memo(UiRenderer);
