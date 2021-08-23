// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { TabScrollButton } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 598,
//   },
//   media: {},
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   alignright: {
//     float: "right",
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const baseUrl = "http://localhost:8080/api";
// export default function DisplayLoan(props) {
//   console.log(props.loan);
//   const { loan } = props;
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const getSlug = (description) => {
//     return description.length < 100
//       ? description
//       : description.substring(0, 100) + "....";
//   };
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={getSlug(loan.description)}
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         component="img"
//         src={`${baseUrl}/loan/loanPhoto/${loan._id}`}
//         title="Loan Image"
//       />
//       <CardContent>
//         <Typography
//           className={classes.alignleft}
//           color="textSecondary"
//           component="span"
//         >
//           Raising:{" "}
//         </Typography>
//         <Typography component="span">₹{loan.loanAmount}</Typography>

//         <Typography className={classes.alignright} component="span">
//           {" "}
//           ₹0
//         </Typography>
//         <Typography
//           className={classes.alignright}
//           color="textSecondary"
//           component="span"
//         >
//           Amount left:{"  "}
//         </Typography>
//       </CardContent>

//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }

import React, { useEffect, useState } from "react";
import useStyles from "../../css/homepage";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";
import { getActiveLoans } from "../../redux/actions/loan";
import { useSelector, useDispatch } from "react-redux";

const baseUrl = "http://localhost:8080/api";
const DisplayLoans = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeLoans = useSelector((state) => state.loan.activeLoans);

  useEffect(() => {
    dispatch(getActiveLoans());
    console.log(activeLoans);
  }, [dispatch]);
  //   const activeLoans = [
  //     {
  //       id: 0,
  //       title:
  //         "A loan of Rs.65000 helps a father of two to keep a growing and expand his boat tour business.",
  //       totalAmt: 70000,
  //       amtRaised: 65000,
  //       amtLeft: 5000,
  //       timeLeft: 12,
  //       guarantor: "Self-Approved",
  //       imgURL:
  //         "https://images.outlookindia.com/public/uploads/articles/2019/11/21/boat_men_20191202.jpg",
  //     },
  //   ];

  const dispLoans = activeLoans.map((item, id) => {
    const progress = ((item.loanAmount - 0) * 100) / item.totalAmt;
    return (
      <Card key={id} className={classes.loanCard_main}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              className={classes.loanCard_headerText}
              component="h2"
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.loanCard_media}
            image={`${baseUrl}/loan/loanPhoto/${item._id}`}
            title="loanImg"
          />
          <CardContent>
            <LinearProgress
              variant="determinate"
              classes={{
                root: classes.progressBar_main,
                barColorPrimary: classes.progressBar_barColorPrimary,
                colorPrimary: classes.progressBar_colorPrimary,
              }}
              value={progress}
            />
            <div className={classes.loanCard_amtDiv}>
              <p className={classes.loanCard_key}>
                Amount Raised :{" "}
                <span className={classes.loanCard_value}>
                  Rs.{item.amtRaised}
                </span>
              </p>
              <p className={classes.loanCard_key}>
                Amount Left :{" "}
                <span className={classes.loanCard_value}>
                  Rs.{item.amtLeft}
                </span>
              </p>
            </div>
            <div className={classes.loanCard_xtraInfoDiv}>
              <Icon className={classes.loanCard_keyIcon}>task_alt</Icon>
              <p className={classes.loanCard_key}>
                Guarantor :{" "}
                <span className={classes.loanCard_value}>{item.guarantor}</span>
              </p>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.loanCard_readBtn}>Read More</Button>
          <Button className={classes.loanCard_supportBtn}>Support</Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className={classes.dispLoans_main}>
      <p className={classes.dispLoans_text}> Causes to show support</p>

      {dispLoans}
    </div>
  );
};
export default DisplayLoans;
