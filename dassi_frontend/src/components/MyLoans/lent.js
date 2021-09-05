import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/homepage";

//Matrial-ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

//Redux
import { getActiveLoans } from "../../redux/actions/loan";
import { useSelector, useDispatch } from "react-redux";

const Lent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeLoans = useSelector((state) => state.loan.activeLoans);
  const filterCategory = useSelector((state) => state.loan.filterCategory);

  const getSlug = (description) => {
    return description.length > 100
      ? description.substring(0, 120) + "...."
      : description;
  };

  useEffect(() => {
    dispatch(getActiveLoans(filterCategory));
  }, [dispatch, filterCategory]);

  const dispLoans = activeLoans.map((item, id) => {
    const progress =
      ((item.loanAmount - item.amountLeft) * 100) / item.loanAmount;
    console.log(progress);

    return (
      <Card key={id} className={classes.loanCard_main}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              className={classes.loanCard_headerText}
              component="h2"
            >
              {getSlug(item.description)}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.loanCard_media}
            image={`https://dassi-api.herokuapp.com/api/loan/loanPhoto/${item._id}`}
            title="loanImg"
          />
          <CardContent>
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
                    </svg>{item.loanAmount}
                </span>
              </p>
              <p className={classes.loanCard_key}>
                Amount Left :{" "}
                <span className={classes.loanCard_value}>
                <svg width="17" height="20" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0082 36.3714C38.0162 35.2857 38.5202 34.019 38.5202 32.5714V16.6738H45V11.2453H38.5202V5.42857C38.5202 3.98095 38.0162 2.71429 37.0082 1.62857C36.0002 0.542857 34.8242 0 33.4802 0H8.28018V5.42857H13.2357L8.28018 9.97781V9.98474L0 16.6737L8.28018 16.674V38H33.4802C34.8242 38 36.0002 37.4571 37.0082 36.3714ZM14.76 36.4492V16.674L32.7602 16.6738V32.5714H18.3602L14.76 36.4492ZM32.7602 11.2453V5.42857H14.76V11.0663L21.2331 11.2453H32.7602Z" fill="#BBF146" />
                    </svg>item.amountLeft}
                </span>
              </p>
            </div>
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
                    <span className={classes.loanCard_value}>{24} Days</span>
                  </p>
                </div>
              </div>
              <div className={classes.loanCard_infoItem}>
                <Icon className={classes.loanCard_keyIcon}>task_alt</Icon>
                <p className={classes.loanCard_key}>
                  Guarantor :{" "}
                  <span className={classes.loanCard_value}>Dassi Labs</span>
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            component={Link}
            to={`/loanInfo/${item._id}`}
            className={classes.loanCard_readBtn}
          >
            Read More
          </Button>

          <Button className={classes.loanCard_supportBtn}>Lend Now</Button>
        </CardActions>
      </Card>
    );
  });

  if (dispLoans.length) {
    return (
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          {dispLoans}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <div className={classes.dispLoans_main}>
        <p className={classes.dispLoans_text}>
          There are no loans to show in this category!
        </p>
      </div>
    );
  }
};
export default Lent;
