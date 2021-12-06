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
          image={`https://dassi-api.herokuapp.com/api/loan/loanPhoto/${loanDetails._id}`}
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
                          {24} Days
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
                    <svg width="17" height="20" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0082 36.3714C38.0162 35.2857 38.5202 34.019 38.5202 32.5714V16.6738H45V11.2453H38.5202V5.42857C38.5202 3.98095 38.0162 2.71429 37.0082 1.62857C36.0002 0.542857 34.8242 0 33.4802 0H8.28018V5.42857H13.2357L8.28018 9.97781V9.98474L0 16.6737L8.28018 16.674V38H33.4802C34.8242 38 36.0002 37.4571 37.0082 36.3714ZM14.76 36.4492V16.674L32.7602 16.6738V32.5714H18.3602L14.76 36.4492ZM32.7602 11.2453V5.42857H14.76V11.0663L21.2331 11.2453H32.7602Z" fill="#BBF146" />
                    </svg> {loanDetails.loanAmount}
                    </span>
                  </p>
                  <p className={classes.loanCard_key}>
                    Amount Left :{" "}
                    <span className={classes.loanCard_value}>
                    <svg width="17" height="20" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0082 36.3714C38.0162 35.2857 38.5202 34.019 38.5202 32.5714V16.6738H45V11.2453H38.5202V5.42857C38.5202 3.98095 38.0162 2.71429 37.0082 1.62857C36.0002 0.542857 34.8242 0 33.4802 0H8.28018V5.42857H13.2357L8.28018 9.97781V9.98474L0 16.6737L8.28018 16.674V38H33.4802C34.8242 38 36.0002 37.4571 37.0082 36.3714ZM14.76 36.4492V16.674L32.7602 16.6738V32.5714H18.3602L14.76 36.4492ZM32.7602 11.2453V5.42857H14.76V11.0663L21.2331 11.2453H32.7602Z" fill="#BBF146" />
                    </svg>{loanDetails.amountLeft}
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
