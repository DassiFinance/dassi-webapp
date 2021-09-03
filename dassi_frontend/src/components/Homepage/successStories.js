import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/homepage";

//Material-UI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const SuccessStories = (props) => {
  const classes = useStyles();
  const stories = [
    {
      id: 0,
      category: "Covid Affected",
      title:
        "Dassi Finance helps a poor Indian man realize his dream of starting his food truck business. ",
      imgURL:
        "https://cdn.discordapp.com/attachments/880926618577694730/883063286701101096/unknown.png",
    },
    {
      id: 1,
      category: "Covid Affected",
      title:
        "Mehmood on his way to become a new-age business man at the age of 60s.",
      imgURL:
        "https://cdn.discordapp.com/attachments/880926618577694730/883063404649127936/unknown.png",
    },
    {
      id: 2,
      category: "Covid Affected",
      title:
        "Dassi finance helped a boatman turned fisherman to secure a decent income for his family during the entire lockdown. ",
      imgURL:
        "https://cdn.discordapp.com/attachments/880926618577694730/883063550829015050/unknown.png",
    },
    {
      id: 3,
      category: "Women",
      title:
        "A young mother started a women-only gym with the help of Dassi finance and became an inspiration for many. ",
      imgURL:
        "https://cdn.discordapp.com/attachments/880926618577694730/883067025721815160/unknown.png",
    },
  ];

  const dispStories = stories.map((item, id) => {
    return (
      <Link to={"/"} style={{ textDecoration: "none" }} key={id}>
        <Card className={classes.successCard_main}>
          <p className={classes.successCard_category}> {item.category}</p>
          <CardMedia
            className={classes.successCard_media}
            image={item.imgURL}
            title="loanImg"
          />{" "}
          <p className={classes.successCard_title}>{item.title}</p>
        </Card>
      </Link>
    );
  });

  if (dispStories.length) {
    return (
      <div className={classes.success_main}>
        <div className={classes.success_solanaDiv}>
          Built on :{" "}
          <img
            src="https://solana.com/branding/new/horizontal/logo-horizontal-gradient-dark.png"
            alt="logo"
            className={classes.success_solana}
          />
        </div>
        <div className={classes.search_div}>
          <Typography variant="h6" className={classes.header_subHeader}>
            Success Stories
          </Typography>
        </div>
        {dispStories}
      </div>
    );
  } else {
    return (
      <div className={classes.success_main}>
        <p className={classes.dispLoans_text}>No Stories to show</p>
      </div>
    );
  }
};
export default SuccessStories;
