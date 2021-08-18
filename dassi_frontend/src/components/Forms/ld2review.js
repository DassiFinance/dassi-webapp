import React from "react";
import { Typography, Grid } from "@material-ui/core";
const LD1Review = (props) => {
  const { formValues } = props;
  const { emiRepetition, repaymentStartDate } = formValues;
  return (
    <>
      <Typography variant="h6">Repayment Details</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom>Emi Repetition*</Typography>
          <Typography gutterBottom>{emiRepetition}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Repayment Start Date*</Typography>
          <Typography gutterBottom>{repaymentStartDate}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
