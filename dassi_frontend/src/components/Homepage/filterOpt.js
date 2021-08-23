import React, { useState } from "react";
import useStyles from "../../css/homepage";
import { loanCategories } from "../../utils/json/loanCategories";

const FilterOpt = (props) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(0);
  const dispFilter = loanCategories.map((item, i) => {
    return (
      <div
        key={i}
        className={
          item.value === filter ? classes.active_filterBtn : classes.filterBtn
        }
      >
        <p className={classes.filterBtnText}>{item.label}</p>
      </div>
    );
  });

  return <div className={classes.filter_main}>{dispFilter}</div>;
};
export default FilterOpt;
