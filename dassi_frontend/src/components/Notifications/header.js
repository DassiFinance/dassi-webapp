import React from "react";
import useStyles from "../../css/homepage";
import Typography from "@material-ui/core/Typography";
import NotificationCard from './NotificationCard';
import './Notification.css';


export default function Header() {
  const classes = useStyles();
  const notifications = [
    {
      title : "auto emi repayment",
      body : "EMI of D1000 is paid automatically by Dassi labs.",
      backgroundColor : '#EB5757'
    },    
    {
      title : "EMI Received  |  by md. siraj",
      body : "August EMI of D250 is added in your wallet.",
      backgroundColor : '#95E65C'
    },    
    {
      title : "EMI Reminder",
      body : "Your next emi of D1000 is due by 5 september, 2021.",
      backgroundColor : '#F2C94C'
    },    
    {
      title : "Lending",
      body : "Your loan request got a support of D300 from Prabal Gupta.",
      backgroundColor:"#68C8FF"
    },    
    {
      title : "Loan approval",
      body : "Your loan got approval through Self-approve.",
      backgroundColor:"#BB6BD9"
    },    
    {
      title : "Loan is live",
      body : "Your loan request is successfully created and is now live.",
      backgroundColor:"#FF4E4E"
    },    
    {
      title : "Loan rejected",
      body : "Your loan request is rejected by the guarantor.",
      backgroundColor:"#E68422"
    },
  ]
  return (
    <React.Fragment>
      <div className={classes.search_div}>
        <Typography variant="h6" className={classes.header_subHeader}>
          Notifications
        </Typography>
      </div>
      <div className={classes.search_div}>
        <NotificationCard notifications={notifications[0]}/>
        <NotificationCard notifications={notifications[1]}/>
        <NotificationCard notifications={notifications[2]}/>
        <NotificationCard notifications={notifications[3]}/>
        <NotificationCard notifications={notifications[4]}/>
        <NotificationCard notifications={notifications[5]}/>
        <NotificationCard notifications={notifications[6]}/>
      </div>
    </React.Fragment>
  );
}
