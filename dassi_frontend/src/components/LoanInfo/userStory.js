import React from "react";
import { useSelector } from "react-redux";
import useStyles from "../../css/loanInfo";

const UserStory = (props) => {
  const classes = useStyles();
  const userBio = useSelector((state) => state.user.credentials.bio);
  return (
    <div className={classes.userStory_div}>
      <p>{userBio}</p>
    </div>
  );
};
export default UserStory;
