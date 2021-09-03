import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/WalletDetails/header";
import useStyles from "../css/homepage";
import SuccessStories from "../components/Homepage/successStories";
import SideNav from "../components/sideNav";


function Wallet() {
    const classes =  useStyles();
    return (
        <div>
            <Grid container className={classes.homepage_main}>
                <Grid item xs={3} className={classes.homepage_subNav}>
                    <SideNav />
                </Grid>
                <Grid item xs={6} className={classes.homepage_subMain}>
                    <Header />
                </Grid>
                <Grid item xs={3} className={classes.homepage_success}>
                    <SuccessStories />
                </Grid>
            </Grid>
        </div>
    )
}

export default Wallet
