import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../css/loanInfo";
import LoanCard from "../components/LoanInfo/loanCard";

import UserStory from "../components/LoanInfo/userStory";
import LoanDets from "../components/LoanInfo/loanDets";
import Guarantor from "../components/LoanInfo/guarantor";

//Material-UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const HomePage = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const handleClick = (pageVal) => {
    setPage(pageVal);
    console.log(pageVal);
  };

  return (
    <Grid container className={classes.loanInfo_main}>
      <Grid item xs={3} className={classes.loanInfo_subNav}></Grid>
      <Grid item xs={9} className={classes.loanInfo_subMain}>
        <div className={classes.loanInfo_header}>
          <Typography variant="h6" className={classes.loanInfo_headerText}>
            <Link to={"/"}>
              <span>
                <ArrowBackIosIcon style={{ color: "#fff" }} />
              </span>
            </Link>
            Overview
          </Typography>
        </div>
        <LoanCard id={props.match.params.id} />
        <div className={classes.loanInfo_subnav}>
          <Button
            onClick={() => handleClick(0)}
            className={classes.loanInfo_subnav_btns}
          >
            User's Story
          </Button>
          <Button
            onClick={() => handleClick(1)}
            className={classes.loanInfo_subnav_btns}
          >
            Loan Details
          </Button>
          <Button
            onClick={() => handleClick(2)}
            className={classes.loanInfo_subnav_btns}
          >
            Guarantor
          </Button>
        </div>
        {page === 0 && <UserStory />}
        {page === 1 && <LoanDets />}
        {page === 2 && <Guarantor />}
      </Grid>
    </Grid>
  );
};
export default HomePage;
