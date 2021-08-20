import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";
import useStyles from "../../css/baForm";

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
  const classes = useStyles();
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
      <Typography variant="h6" gutterBottom className={classes.subHeader}>
        Loan Details
      </Typography>
      <Container>
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

          <Grid item xs={6} className={classes.splitInputFieldGrid}>
            <Grid item xs={7}>
              <InputField
                name={loanDuration.name}
                label={loanDuration.label}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.splitInputField,
                  },
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <SelectField
                name={loanDurationUnit.name}
                label={loanDurationUnit.label}
                data={loanDurationUnits}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InputField
              multiline
              rows={4}
              name={loanDescription.name}
              label={loanDescription.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
