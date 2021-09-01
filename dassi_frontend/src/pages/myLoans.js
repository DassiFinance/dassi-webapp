import React, { useState } from "react";
import useStyles from "../css/loanInfo";
import SideNav from "../components/sideNav";
import Borrow from "../components/MyLoans/borrow";
import Lent from "../components/MyLoans/lent";

//Material-UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const MyLoans = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const handleClick = (pageVal) => {
    setPage(pageVal);
    console.log(pageVal);
  };

  return (
    <Grid container className={classes.loanInfo_main}>
      <Grid item xs={3} className={classes.loanInfo_subNav}>
        {" "}
        <SideNav />
      </Grid>
      <Grid item xs={9} className={classes.loanInfo_subMain}>
        <div className={classes.loanInfo_header}>
          <Typography variant="h6" className={classes.loanInfo_headerText}>
            My loans
          </Typography>
        </div>
        <div className={classes.loanInfo_subnav}>
          <Button
            onClick={() => handleClick(0)}
            className={classes.loanInfo_subnav_btns}
          >
            Borrow
          </Button>
          <Button
            onClick={() => handleClick(1)}
            className={classes.loanInfo_subnav_btns}
          >
            Lent
          </Button>
        </div>
        {page === 0 && <Borrow />}
        {page === 1 && <Lent />}
      </Grid>
    </Grid>
  );
};
export default MyLoans;
