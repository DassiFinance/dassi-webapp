import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";

export default function Review(props) {
  const {
    formField: { firstName, lastName, email },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        LoanDetails1
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
