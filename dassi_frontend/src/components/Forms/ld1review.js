import React from "react";
import { Typography, Grid } from "@material-ui/core";
const LD1Review = (props) => {
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
      <Typography variant="h6">Loan Details</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom>Loan Amount*</Typography>
          <Typography gutterBottom>{loanAmount}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Loan Category*</Typography>
          <Typography gutterBottom>{loanCategory}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Loan Duration*</Typography>
          <Typography gutterBottom>{loanDuration}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Loan Duration*</Typography>
          <Typography gutterBottom>{loanDurationUnit}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>Loan Description*</Typography>
          <Typography gutterBottom>{loanDescription}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
