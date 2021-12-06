import React from "react";
// import { useSelector } from "react-redux";
import useStyles from "../../css/loanInfo";

const Guarantor = (props) => {
  const classes = useStyles();
  // const username = useSelector((state) => state.user.credentials.username);
  return (
    <div className={classes.guarantorDiv}>
      <p>
        <span className={classes.guarantor_key}>Name</span> : Dassi Labs
      </p>
      <p>
        <span className={classes.guarantor_key}>Default Rate</span> : 0%
      </p>
      <p>
        <span className={classes.guarantor_key}>Approval Score</span> : 5%
      </p>
      <p>
        <span className={classes.guarantor_key}>Loan at risk rate</span> :
        0.005%
      </p>
    </div>
  );
};
export default Guarantor;
