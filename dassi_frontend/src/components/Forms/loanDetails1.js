import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";
import useStyles from "../../css/baForm";

const loanCategories = [
  {
    value: "61233a4e229a1059582c411c",
    label: "Miscellaneous",
  },
  {
    value: "612335aa2a61253fb0ac03f0",
    label: "Covid 19",
  },
  {
    value: "612335b42a61253fb0ac03f2",
    label: "Women and children",
  },
  {
    value: "612335c22a61253fb0ac03f4",
    label: "Startup",
  },
  {
    value: "612335d32a61253fb0ac03f6",
    label: "Home loan",
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

          <Grid item xs={12} className={classes.splitInputFieldGrid}>
            <Grid item xs={8}>
              <InputField
                name={loanDuration.name}
                label={loanDuration.label}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <SelectField
                name={loanDurationUnit.name}
                label={loanDurationUnit.label}
                data={loanDurationUnits}
                fullWidth
                className={classes.splitSelectField}
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
