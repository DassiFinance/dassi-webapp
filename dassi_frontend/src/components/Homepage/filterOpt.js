import React from "react";
import useStyles from "../../css/homepage";
import { loanCategories } from "../../utils/json/loanCategories";
import { setCategoryFilter } from "../../redux/actions/loan";
import { useDispatch, useSelector } from "react-redux";

// Unshift adds this to the start of the array
loanCategories.unshift({
  value: "",
  label: "All",
});

const FilterOpt = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.loan.filterCategory);

  const selectCategory = (categoryValue) => {
    dispatch(setCategoryFilter(categoryValue));
  };

  const dispFilter = loanCategories.map((item) => {
    return (
      <div
        key={item.value}
        onClick={() => selectCategory(item.value)}
        className={
          item.value === filterCategory
            ? classes.active_filterBtn
            : classes.filterBtn
        }
      >
        <p className={classes.filterBtnText}>{item.label}</p>
      </div>
    );
  });

  return <div className={classes.filter_main}>{dispFilter}</div>;
};
export default FilterOpt;
