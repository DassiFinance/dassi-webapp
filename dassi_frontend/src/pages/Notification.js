import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/Notifications/header";
import useStyles from "../css/homepage";
import SideNav from "../components/sideNav";

function Settings() {
    const classes = useStyles();
    return (
        <Grid container className={classes.homepage_main}>
        <Grid item xs={3} className={classes.homepage_subNav}>
          <SideNav />
        </Grid>
        <Grid item xs={9} className={classes.homepage_subMain}>
            <Header/>
        </Grid>
      </Grid>
    );
}

export default Settings;
