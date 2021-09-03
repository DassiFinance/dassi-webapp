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
      body : "EMI of D100 is paid automatically by Dassi labs.",
      style :{
        backgroundColor : '#EB5757',
      }
    },    
    {
      title : "EMI Received  |  by md. siraj",
      body : "August EMI of D250 is added in your wallet.",
      style : {
        backgroundColor : '#95E65C'
      }
    },    
    {
      title : "EMI Reminder",
      body : "Your next emi of D100 is due by 5 september, 2021.",
      style : {
        backgroundColor : '#F2C94C'
      }
    },    
    {
      title : "Lending",
      body : "Your loan request got a support of D300 from Prabal Gupta.",
      style : {
        backgroundColor:"#68C8FF"
      }
    },    
    {
      title : "Loan approval",
      body : "Your loan got approval through Self-approve.",
      style : {
        backgroundColor:"#BB6BD9"
      }
    },    
    {
      title : "Loan is live",
      body : "Your loan request is successfully created and is now live.",
      style : {

        backgroundColor:"#FF4E4E"
      }
    },    
    {
      title : "Loan rejected",
      body : "Your loan request is rejected by the guarantor.",
      style :{ 
        backgroundColor:"#E68422"
      }
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
        <NotificationCard notifications={notifications} index={0}/>
        <NotificationCard notifications={notifications} index={1}/>
        <NotificationCard notifications={notifications} index={2}/>
        <NotificationCard notifications={notifications} index={3}/>
        <NotificationCard notifications={notifications} index={4}/>
        <NotificationCard notifications={notifications} index={5}/>
        <NotificationCard notifications={notifications} index={6}/>
        
      </div>
    </React.Fragment>
  );
}
