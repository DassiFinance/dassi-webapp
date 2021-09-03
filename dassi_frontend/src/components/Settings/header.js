import React from "react";
import useStyles from "../../css/settings";
import "../../css/setting.css";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Row, Col } from 'react-bootstrap'
import Button from "@material-ui/core/Button";
import verified from './Verified.svg'

export default function Header() {
  const classes = useStyles();
  const userDetails= {
    name:"Prabal Gupta",
    location : "Lucknow, India",
    occupation:"Freelance Designer",
    loan:"I Love supporting cause"
  }
  return (
    <React.Fragment>
      <div className={classes.search_div}>
        <Typography variant="h6" className={classes.header_subHeader}>
          Settings
        </Typography>
      </div>
      <div className="user-profile  w-100 m-2">
        <span className="profile-details">User Profile</span>
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center m-4 flex-md-row flex-sm-column flex-xs-column">
        <div>
          <div className={classes.imgCircle}></div>
        </div>
        <div className="p-3 mx-3">
          <Button className={classes.btnChangeProPic}> Change Profile Pic</Button>
        </div>
      </div>
      <div className="user-profile">
        <div className="col">
          <div className="row-md-12 my-2">
            <label className="mx-2">Name:</label>
            <span className="profile-details mx-2">{userDetails.name}</span>
          </div>
        </div>        
        <div className="col">
          <div className="row-md-12 my-2">
            <label className="mx-2">Location:</label>
            <span className="profile-details mx-2">{userDetails.location}</span>
          </div>
        </div>        
        <div className="col">
          <div className="row-md-12 my-2">
            <label className="mx-2">Occupation:</label>
            <span className="profile-details mx-2">{userDetails.occupation}</span>
          </div>
        </div>        
        <div className="col">
          <div className="row-md-12 my-2">
            <label className="mx-2">I Loan beacuse:</label>
            <span className="profile-details mx-2">{userDetails.loan}</span>
          </div>
        </div>
      </div>
      <div className={classes.search_div}></div>
      <div className="">
        <div className="user-profile m-2 my-3 w-100">
          <a>
              <span>
                Security & Privacy
              </span>
          </a>
        </div>        
        <div className="user-profile m-2 my-3 w-100">
          <a>
              <span>
                Change password
              </span>
          </a>
        </div>        
        <div className="user-profile m-2 my-3 w-100">
          <a>
              <span>
                Verify phone number
              </span>
          </a>
        </div>        
        <div className="user-profile disabled m-2 my-3 w-100">
          <a>
              <span>
                Email Verified
              </span>
              <span className="mx-2">
                <img src={verified}/>
              </span>
          </a>
        </div>
      </div>
      <div className={classes.search_div}></div>
      <div className="user-profile mx-2 my-4 disabled">
        <div>
          <a>
          <label>
            Connect google account
          </label>
          </a>
        </div>
      </div>      
      <div className="user-profile mx-2 my-4">
        <div>
        <a>
          <label>
            Refer a friend
          </label>
          </a>
        </div>
      </div>      
      <div className="user-profile mx-2 my-4">
        <div>
        <a>
          <label>
            Read whitepaper
          </label>
          </a>
        </div>
      </div>      
      <div className="user-profile mx-2 my-4 logout">
        <div>
          <a>
          <label>
            Logout
          </label>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
