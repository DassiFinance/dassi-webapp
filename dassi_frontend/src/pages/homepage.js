import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../css/homepage";

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.homepage_main}>
      <Grid item xs={3} className={classes.homepage_subNav}></Grid>
      <Grid item xs={6} className={classes.homepage_subMain}>
        <h1>Hello</h1>
      </Grid>
      <Grid item xs={3} className={classes.homepage_subNav}></Grid>
    </Grid>
  );
};
export default HomePage;
