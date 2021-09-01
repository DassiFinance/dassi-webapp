import React, { useEffect } from "react";
import useStyles from "../../css/loanInfo";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { getLoanDetails, makePayment } from "../../redux/actions/loan";

import { useSelector, useDispatch } from "react-redux";

const LoanCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loanDetails = useSelector((state) => state.loan.loanDetails);
  const [amt, setAmt] = React.useState(500);
  const handleChange = (event) => {
    setAmt(event.target.value);
  };
  const getSlug = (description) => {
    return description.length > 100
      ? description.substring(0, 120) + "...."
      : description;
  };
  const progress =
    ((loanDetails.loanAmount - loanDetails.amountLeft) * 100) /
    loanDetails.loanAmount;

  useEffect(() => {
    dispatch(getLoanDetails(props.id));
  }, [dispatch, props.id]);
  if (loanDetails._id) {
    return (
      <Card className={classes.loanCard_main}>
        <CardMedia
          className={classes.loanCard_media}
          image={`http://localhost:8080/api/loan/loanPhoto/${loanDetails._id}`}
          title="loanImg"
        >
          <CardContent>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Typography
                  gutterBottom
                  className={classes.loanCard_headerText}
                  component="h2"
                >
                  {getSlug(loanDetails.description)}
                </Typography>

                <div className={classes.loanCard_xtraInfoDiv}>
                  <div className={classes.loanCard_infoDiv}>
                    <div className={classes.loanCard_infoItem}>
                      <Icon className={classes.loanCard_keyIcon}>stars</Icon>
                      <p className={classes.loanCard_key}>
                        Credit Score :{" "}
                        <span className={classes.loanCard_value}>{305}</span>
                      </p>
                    </div>
                    <div className={classes.loanCard_infoItem}>
                      <Icon className={classes.loanCard_keyIcon}>schedule</Icon>
                      <p className={classes.loanCard_key}>
                        Time Left :{" "}
                        <span className={classes.loanCard_value}>
                          {8} hours
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={classes.loanCard_infoItem}>
                    <Icon className={classes.loanCard_keyIcon}>task_alt</Icon>
                    <p className={classes.loanCard_key}>
                      Guarantor :{" "}
                      <span className={classes.loanCard_value}>
                        Self Approved
                      </span>
                    </p>
                  </div>
                </div>
                <LinearProgress
                  variant="determinate"
                  classes={{
                    root: classes.progressBar_main,
                    barColorPrimary: classes.progressBar_barColorPrimary,
                    colorPrimary: classes.progressBar_colorPrimary,
                  }}
                  value={progress}
                />
                <div className={classes.loanCard_amtDiv}>
                  <p className={classes.loanCard_key}>
                    Raising :{" "}
                    <span className={classes.loanCard_value}>
                      ₹ {loanDetails.loanAmount}
                    </span>
                  </p>
                  <p className={classes.loanCard_key}>
                    Amount Left :{" "}
                    <span className={classes.loanCard_value}>
                      ₹ {loanDetails.amountLeft}
                    </span>
                  </p>
                </div>
                <div className={classes.loanCard_btnDiv}>
                  <FormControl className={classes.loanCard_readBtn}>
                    <NativeSelect
                      id="demo-customized-select-native"
                      value={amt}
                      onChange={handleChange}
                      disableUnderline
                      classes={{
                        select: classes.textFieldInput,
                        icon: classes.selectIcon,
                      }}
                    >
                      <option value={500}>₹500</option>
                      <option value={1000}>₹1000</option>
                      <option value={1500}>₹1500</option>
                      <option value={2000}>₹2000</option>
                      <option value={3000}>₹3000</option>
                      <option value={4000}>₹4000</option>
                      <option value={5000}>₹5000</option>
                    </NativeSelect>
                  </FormControl>

                  <Button
                    className={classes.loanCard_supportBtn}
                    onClick={() => {
                      dispatch(makePayment(parseInt(amt), loanDetails._id));
                    }}
                  >
                    Lend Now
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </CardMedia>
      </Card>
    );
  } else {
    return <h1>none</h1>;
  }
};

export default LoanCard;
