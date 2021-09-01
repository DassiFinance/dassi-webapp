import React, { useEffect } from "react";
import useStyles from "../../css/loanInfo";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { getLoanDetails } from "../../redux/actions/loan";

import { useSelector, useDispatch } from "react-redux";

import Wallet from "../wallet/walletHelper";

const LoanCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loanDetails = useSelector((state) => state.loan.loanDetails);
  const [amt, setAmt] = React.useState(50);
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
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={40}>40</option>
                      <option value={50}>50</option>

                      <option value={60}>60</option>
                      <option value={100}>100</option>
                      <option value={150}>150</option>
                      <option value={200}>200</option>
                      <option value={250}>250</option>
                    </NativeSelect>
                  </FormControl>

                  <Wallet
                    name="lend"
                    amount={parseInt(amt)}
                    loanId={loanDetails._id}
                    history={props.history}
                  />
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
