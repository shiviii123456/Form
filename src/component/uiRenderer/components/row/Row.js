import _map from "lodash/map";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import Column from "../column";

import styles from "./row.module.scss";

const Row = (props) => {
  const { columns, ...restProps } = props;
  const renderColumn = useCallback(
    (fieldId) => <Column id={fieldId} {...restProps} />,
    [restProps]
  );
  return <div className={styles.container}>{_map(columns, renderColumn)}</div>;
};

Row.propTypes = {
  columns: PropTypes.array,
};
Row.defaultProps = {
  columns: [],
};

export default memo(Row);
