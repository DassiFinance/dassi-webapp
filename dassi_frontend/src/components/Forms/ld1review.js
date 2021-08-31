import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../css/baForm";
import { getLoanCategoryFromId } from "../../utils/helpers/loanCategory";
const LD1Review = (props) => {
  const classes = useStyles();
  const { formValues } = props;
  const {
    loanAmount,
    loanCategory,
    loanDuration,
    loanDurationUnit,
    loanDescription,
  } = formValues;
  return (
    <>
      <Typography variant="h6" className={classes.review_subheader}>
        Loan Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Amount *
          </Typography>

          <div className={classes.textFieldInput}> {loanAmount}</div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Category *
          </Typography>

          <div className={classes.textFieldInput}>
            {" "}
            {getLoanCategoryFromId(loanCategory)}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Time for which you need loan *
          </Typography>

          <div className={classes.textFieldInput}>
            {" "}
            {loanDuration} {loanDurationUnit}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Description *
          </Typography>

          <div className={classes.textFieldInput}> {loanDescription}</div>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
