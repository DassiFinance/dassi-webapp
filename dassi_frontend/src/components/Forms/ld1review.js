import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../css/baForm";
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
      <Typography variant="h6" className={classes.textCommon}>
        Loan Details
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Amount*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {loanAmount}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Category*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {loanCategory}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Duration*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {loanDuration}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Duration*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {loanDurationUnit}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Loan Description*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {loanDescription}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
