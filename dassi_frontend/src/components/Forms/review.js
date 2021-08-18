import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid, Container } from "@material-ui/core";
import PDReview from "./pdreview";
import LD1Review from "./ld1review";
import LD2Review from "./ld2review";
import LD3Review from "./ld3review";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Container>
        <Grid container>
          <PDReview formValues={formValues} />
        </Grid>
        <Grid container>
          <LD1Review formValues={formValues} />
        </Grid>
        <Grid container>
          <LD2Review formValues={formValues} />
        </Grid>
        <Grid container>
          <LD3Review formValues={formValues} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
