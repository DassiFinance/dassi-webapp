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
      id: 3,
      link: "https://medium.com/@decentralizedworld/a-young-mother-started-a-women-only-gym-with-the-help-of-dassi-finance-and-became-an-inspiration-86732b8483cd",
      category: "Women Empowerment",
      title:
        "A young mother started a women-only gym with the help of Dassi finance and became an inspiration for many. ",
      imgURL: "https://miro.medium.com/max/750/0*JOB5mTqCvtHIKs-E",
      position: "top",
    },
    {
      id: 0,
      link: "https://medium.com/@decentralizedworld/dassi-finance-helps-a-poor-indian-man-realize-his-dream-of-starting-his-own-food-truck-business-1ec259554df2",
      category: "Business",
      title:
        "Dassi Finance helps a poor Indian man realize his dream of starting his food truck business. ",
      imgURL: "https://miro.medium.com/max/1000/0*mPbzcmTL2yj6UvuX",
      position: "center",
    },
    {
      id: 1,
      link: "https://medium.com/@decentralizedworld/mehmood-on-his-way-to-become-a-modern-age-business-man-at-the-age-of-60s-adbec25dc0e3",
      category: "Business",
      title:
        "Mehmood on his way to become a new-age business man at the age of 60s.",
      imgURL: "https://miro.medium.com/max/1250/0*eSHOwN20H__C3exd",
      position: "center",
    },
    {
      id: 2,
      link: "https://medium.com/@decentralizedworld/dassi-finance-helps-a-boatman-turned-fisherman-to-secure-a-decent-income-for-his-family-during-7124ce5954a8",
      category: "Covid Affected",
      title:
        "Dassi finance helped a boatman turned fisherman to secure a decent income for his family during the entire lockdown. ",
      imgURL: "https://miro.medium.com/max/875/0*hsFuW3tpybj-xCpw",
      position: "top",
    },
  ];

  const dispStories = stories.map((item, id) => {
    return (
      <a
        href={item.link}
        style={{ textDecoration: "none !important" }}
        key={id}
        target={"_blank"}
      >
        <Card className={classes.successCard_main}>
          <p className={classes.successCard_category}> {item.category}</p>
          <CardMedia
            style={{ backgroundPosition: item.position }}
            className={classes.successCard_media}
            image={item.imgURL}
            title="loanImg"
          />{" "}
          <p className={classes.successCard_title}>{item.title}</p>
        </Card>
      </a>
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
