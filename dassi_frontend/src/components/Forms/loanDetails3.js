import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import SelectField from "../../utils/FormFields/SelectField";
import useStyles from "../../css/baForm";

const guarantorsAvailable = [
  {
    value: "Self Approve",
    label: "Self Approve",
  },
  {
    value: "Dassi Labs",
    label: "Dassi Labs",
  },
];

export default function LoanDetails2(props) {
  const classes = useStyles();
  const {
    formField: { guarantor },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.subHeader}>
        Select Guarantor
      </Typography>
      <Container>
        <Grid container>
          <SelectField
            name={guarantor.name}
            label={guarantor.label}
            data={guarantorsAvailable}
            fullWidth
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
