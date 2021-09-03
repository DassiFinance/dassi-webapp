import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/Settings/header";
import useStyles from "../css/homepage";
import SuccessStories from "../components/Homepage/successStories";
import SideNav from "../components/sideNav";

function Settings() {
    const classes = useStyles();
    return (
        <Grid container className={classes.homepage_main}>
        <Grid item xs={3} className={classes.homepage_subNav}>
          <SideNav />
        </Grid>
        <Grid item xs={6} className={classes.homepage_subMain}>
            <Header/>
        </Grid>
        <Grid item xs={3} className={classes.homepage_success}>
          <SuccessStories />
        </Grid>
      </Grid>
    );
}

export default Settings;
