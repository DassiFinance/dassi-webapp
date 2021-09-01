import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/homepage";

//Material-UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

import Button from "@material-ui/core/Button";

//Redux
import { getActiveLoans } from "../../redux/actions/loan";
import { useSelector, useDispatch } from "react-redux";

const DisplayLoans = (props) => {
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
            image={`http://localhost:8080/api/loan/loanPhoto/${item._id}`}
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
                  ₹ {item.loanAmount}
                </span>
              </p>
              <p className={classes.loanCard_key}>
                Amount Left :{" "}
                <span className={classes.loanCard_value}>
                  ₹ {item.amountLeft}
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
                    <span className={classes.loanCard_value}>{8} hours</span>
                  </p>
                </div>
              </div>
              <div className={classes.loanCard_infoItem}>
                <Icon className={classes.loanCard_keyIcon}>task_alt</Icon>
                <p className={classes.loanCard_key}>
                  Guarantor :{" "}
                  <span className={classes.loanCard_value}>Self Approved</span>
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

          <Button
            className={classes.loanCard_supportBtn}
            component={Link}
            to={`/loanInfo/${item._id}`}
          >
            Support
          </Button>
        </CardActions>
      </Card>
    );
  });

  if (dispLoans.length) {
    return (
      <div className={classes.dispLoans_main}>
        <p className={classes.dispLoans_text}> Causes to show support</p>
        {dispLoans}
      </div>
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
export default DisplayLoans;
