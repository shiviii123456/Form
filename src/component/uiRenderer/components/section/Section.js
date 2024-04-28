import React, { memo, useCallback } from "react";
import Row from "../row";
import PropTypes from "prop-types";
import _map from "lodash/map";

const Section = (props) => {
  const { label, rows, ...restProps } = props;

  const renderRow = useCallback(
    (row) => <Row {...row} {...restProps} />,
    [restProps]
  );
  return (
    <div>
      <div>{label}</div>
      <div>{_map(rows, renderRow)}</div>
    </div>
  );
};

Section.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.array,
};
Section.defaultProps = {
  label: undefined,
  rows: [],
};
export default memo(Section);
