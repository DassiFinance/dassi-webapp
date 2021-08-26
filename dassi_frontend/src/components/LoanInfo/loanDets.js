import React from "react";
import { useSelector } from "react-redux";
import useStyles from "../../css/loanInfo";

const LoanDets = (props) => {
  const classes = useStyles();
  const loanDetails = useSelector((state) => state.loan.loanDetails);
  return (
    <div className={classes.guarantorDiv}>
      <p>
        <span className={classes.guarantor_key}>Loan Length</span> :{" "}
        {loanDetails.duration}
      </p>
      <p>
        <span className={classes.guarantor_key}>Repayment Schedule</span> :
        Regularly
      </p>
      <p>
        <span className={classes.guarantor_key}>EMI Period</span> :{" "}
        {loanDetails.emiRepetition}
      </p>
      <p>
        <span className={classes.guarantor_key}>
          Facilitated by a Guarantor
        </span>{" "}
        : No
      </p>
    </div>
  );
};
export default LoanDets;
