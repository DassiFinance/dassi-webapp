import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/homepage";

//Material-UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";

import Button from "@material-ui/core/Button";

//Redux
import { getActiveLoans } from "../../redux/actions/loan";
import { useSelector, useDispatch } from "react-redux";

const SuccessStories = (props) => {
  const classes = useStyles();
  const stories = [
    {
      id: 0,
      category: "Covid Affected",
      title:
        "Dassi Finance helps a poor Indian man realize his dream of starting his food truck business. ",
      imgURL:
        "https://images.livemint.com/img/2021/06/10/1140x641/1__bombay_food_truck_Mint_Lounge_1623295561174_1623295572117.png",
    },
    {
      id: 1,
      category: "Covid Affected",
      title:
        "Mehmood on his way to become a new-age business man at the age of 60s.",
      imgURL:
        "https://4.imimg.com/data4/QX/LT/MY-4293712/computerized-embroidery-machine-500x500.jpg",
    },
    {
      id: 2,
      category: "Covid Affected",
      title:
        "Dassi finance helped a boatman turned fisherman to secure a decent income for his family during the entire lockdown. ",
      imgURL:
        "https://s01.sgp1.digitaloceanspaces.com/large/842300-47849-mxzyjytlob-1482319208.jpg",
    },
    {
      id: 3,
      category: "Women",
      title:
        "A young mother started a women-only gym with the help of Dassi finance and became an inspiration for many. ",
      imgURL:
        "https://www.weddingplz.com/images/portfolio/main/17/24073/Figurefit-7341-1-weddingplz.jpg",
    },
  ];

  const dispStories = stories.map((item, id) => {
    return (
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Card key={id} className={classes.successCard_main}>
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
