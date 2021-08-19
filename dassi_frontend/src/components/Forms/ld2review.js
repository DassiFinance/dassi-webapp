import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../css/baForm";
const LD1Review = (props) => {
  const classes = useStyles();
  const { formValues } = props;
  const { emiRepetition, repaymentStartDate } = formValues;
  return (
    <>
      <Typography variant="h6" className={classes.textCommon}>
        Repayment Details
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Emi Repetition*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {emiRepetition}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Repayment Start Date*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {repaymentStartDate}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
