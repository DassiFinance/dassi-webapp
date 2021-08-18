import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";

const loanCategories = [
  {
    value: "None",
    label: "None",
  },
  {
    value: "Women and Children",
    label: "Women and Children",
  },
  {
    value: "Education Loan",
    label: "Education Loan",
  },
  {
    value: "Home Loan",
    label: "Home Loan",
  },
];

const loanDurationUnits = [
  {
    value: "Weeks",
    label: "Weeks",
  },
  {
    value: "Months",
    label: "Months",
  },
  {
    value: "Years",
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
