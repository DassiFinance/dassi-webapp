import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";

const loanCategories = [
  {
    value: "0",
    label: "None",
  },
  {
    value: "1",
    label: "Women and Children",
  },
  {
    value: "2",
    label: "Education Loan",
  },
  {
    value: "3",
    label: "Home Loan",
  },
];

const loanDurationUnits = [
  {
    value: "0",
    label: "Weeks",
  },
  {
    value: "1",
    label: "Months",
  },
  {
    value: "2",
    label: "Years",
  },
];

export default function LoanDetailsDetails1(props) {
  const {
    formField: {
      loanAmount,
      loanCategory,
      loanDuration,
      loanDurationUnit,
      loanDescription,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={loanAmount.name}
            label={loanAmount.label}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={loanCategory.name}
            label={loanCategory.label}
            data={loanCategories}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            name={loanDuration.name}
            label={loanDuration.label}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={loanDurationUnit.name}
            label={loanDurationUnit.label}
            data={loanDurationUnits}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            name={loanDescription.name}
            label={loanDescription.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
