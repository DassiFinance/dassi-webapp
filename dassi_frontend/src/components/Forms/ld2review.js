import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../css/baForm";
import * as moment from "moment";
const LD2Review = (props) => {
  const classes = useStyles();
  const { formValues } = props;
  const { emiRepetition, repaymentStartDate } = formValues;
  return (
    <>
      <Typography variant="h6" className={classes.review_subheader}>
        Repayment Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Repayment Start Date *
          </Typography>
          <div className={classes.textFieldInput}>
            {moment(repaymentStartDate).format("DD/MM/YY")}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Emi Repetition *
          </Typography>
          <div className={classes.textFieldInput}> {emiRepetition}</div>
        </Grid>
      </Grid>
    </>
  );
};

export default LD2Review;
