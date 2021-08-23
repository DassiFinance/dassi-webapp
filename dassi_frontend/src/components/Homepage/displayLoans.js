import React, { useState } from "react";
import useStyles from "../../css/homepage";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

const DisplayLoans = (props) => {
  const classes = useStyles();
  const activeLoans = [
    {
      id: 0,
      creditScore: 800,
      title:
        "A loan of Rs.65000 helps a father of two to keep a growing and expand his boat tour business.",
      totalAmt: 70000,
      amtRaised: 65000,
      amtLeft: 5000,
      timeLeft: 12,
      guarantor: "Self-Approved",
      imgURL:
        "https://images.outlookindia.com/public/uploads/articles/2019/11/21/boat_men_20191202.jpg",
    },
  ];

  const dispLoans = activeLoans.map((item, id) => {
    const progress = ((item.amtRaised - 0) * 100) / item.totalAmt;

    return (
      <Card key={id} className={classes.loanCard_main}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              className={classes.loanCard_headerText}
              component="h2"
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.loanCard_media}
            image={item.imgURL}
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
                Amount Raised :{" "}
                <span className={classes.loanCard_value}>
                  Rs.{item.amtRaised}
                </span>
              </p>
              <p className={classes.loanCard_key}>
                Amount Left :{" "}
                <span className={classes.loanCard_value}>
                  Rs.{item.amtLeft}
                </span>
              </p>
            </div>
            <div className={classes.loanCard_xtraInfoDiv}>
              <div className={classes.loanCard_infoDiv}>
                <div className={classes.loanCard_infoItem}>
                  <Icon className={classes.loanCard_keyIcon}>stars</Icon>
                  <p className={classes.loanCard_key}>
                    Credit Score :{" "}
                    <span className={classes.loanCard_value}>
                      {item.creditScore}
                    </span>
                  </p>
                </div>
                <div className={classes.loanCard_infoItem}>
                  <Icon className={classes.loanCard_keyIcon}>schedule</Icon>
                  <p className={classes.loanCard_key}>
                    Time Left :{" "}
                    <span className={classes.loanCard_value}>
                      {item.timeLeft} hours
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.loanCard_infoItem}>
                <Icon className={classes.loanCard_keyIcon}>task_alt</Icon>
                <p className={classes.loanCard_key}>
                  Guarantor :{" "}
                  <span className={classes.loanCard_value}>
                    {item.guarantor}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.loanCard_readBtn}>Read More</Button>
          <Button className={classes.loanCard_supportBtn}>Support</Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className={classes.dispLoans_main}>
      <p className={classes.dispLoans_text}> Causes to show support</p>

      {dispLoans}
    </div>
  );
};
export default DisplayLoans;
