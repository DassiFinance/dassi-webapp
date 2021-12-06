import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/Homepage/header";
import FilterOpt from "../components/Homepage/filterOpt";
import useStyles from "../css/homepage";
import DisplayLoans from "../components/Homepage/displayLoans";
import SuccessStories from "../components/Homepage/successStories";

import SideNav from "../components/sideNav";

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.homepage_main}>
      <Grid item xs={3} className={classes.homepage_subNav}>
        <SideNav />
      </Grid>
      <Grid item xs={6} className={classes.homepage_subMain}>
        <Header />
        <FilterOpt />
        <DisplayLoans />
      </Grid>
      <Grid item xs={3} className={classes.homepage_success}>
        <SuccessStories />
      </Grid>
    </Grid>
  );
};
export default HomePage;
