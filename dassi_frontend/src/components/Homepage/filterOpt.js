import React, { useState } from "react";
import useStyles from "../../css/homepage";

const FilterOpt = (props) => {
  const classes = useStyles();
  const filterOpt = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Covid Affected",
    },
    {
      id: 2,
      name: "Agriculture",
    },
    {
      id: 3,
      name: "Digitalization",
    },
    {
      id: 4,
      name: "Small Business",
    },
    {
      id: 5,
      name: "Start-up",
    },
  ];
  const [filter, setFilter] = useState(0);
  const dispFilter = filterOpt.map((item) => {
    return (
      <div
        className={
          item.id == filter ? classes.active_filterBtn : classes.filterBtn
        }
      >
        <p className={classes.filterBtnText}>{item.name}</p>
      </div>
    );
  });

  return <div className={classes.filter_main}>{dispFilter}</div>;
};
export default FilterOpt;
