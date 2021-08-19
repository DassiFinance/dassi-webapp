import React from "react";
import useStyles from "../../css/baForm";

import { Typography, Grid } from "@material-ui/core";
const PDReview = (props) => {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, lastName, email, zipcode, occupation, bio, income } =
    formValues;
  return (
    <>
      <Typography variant="h6" className={classes.textCommon}>
        Personal Details
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            First Name*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {firstName}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Last Name*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {lastName}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Bio*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {bio}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Occupation*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {occupation}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Income*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {income}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Email*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {email}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Zipcode*
          </Typography>
          <Typography gutterBottom className={classes.textCommon}>
            {zipcode}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PDReview;
