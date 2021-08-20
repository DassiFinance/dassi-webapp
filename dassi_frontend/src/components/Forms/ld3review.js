import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../css/baForm";
const LD1Review = (props) => {
  const { formValues } = props;
  const { guarantor } = formValues;
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.review_subheader}>
        Select Guarantor
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Guarantor *
          </Typography>
          <Grid item xs={12}>
            <div className={classes.textFieldInput}> {guarantor}</div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
