import React from "react";
import useStyles from "../../css/settings";
import "../../css/setting.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useSelector } from "react-redux";

export default function Header() {
  const fullName = useSelector((state) => state.user.credentials.fullName);
  const classes = useStyles();
  const userDetails= {
    name:fullName,
    wallet_balance : " 500.00",
    free_balance : " 0.00"
  }
  return (
    <React.Fragment>
      <div className={classes.search_div}>
        <Typography variant="h6" className={classes.header_subHeader}>
          Wallet Details
        </Typography>
      </div>
      <div className="user-profile">
        <div className="col">
          <div className="row-md-12 my-2">
            {/* <label className="mx-2">Name:</label> */}
            <span className="profile-details mx-2">{`Hello ${userDetails.name}`}</span>
          </div>
        </div>        
      </div>
      <div className={classes.search_div}></div>
      <div className="btnChangeProPic wallet-details mx-2 my-4">
        <label>
          Dassi Wallet Balance : 
        </label>
        <span>
          {userDetails.wallet_balance} Dassi Coins
        </span>
      </div>      
      <div className="btnChangeProPic wallet-details mx-2 my-4">
        <label>
          Dassi Free Wallet Funds : 
        </label>
        <span>
          {userDetails.free_balance} Dassi Coins
        </span>
      </div>
      <div className={classes.search_div}></div>
      <div className="my-4 mx-2 d-flex flex-row justify-content-center align-items-center">
        <Button className={classes.btnChangeProPic}>AIRDROP DASSI COIN</Button>
      </div>
      
      <div className={classes.search_div}></div>
    </React.Fragment>
  );
}
