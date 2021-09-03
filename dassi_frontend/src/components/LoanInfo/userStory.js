import { useSelector } from "react-redux";
import useStyles from "../../css/loanInfo";

const UserStory = (props) => {
  const classes = useStyles();
  const bio = useSelector((state) => state.loan.loanDetails.loanUser.bio);
  const income = useSelector((state) => state.loan.loanDetails.loanUser.income);
  const fullName = useSelector(
    (state) => state.loan.loanDetails.loanUser.fullName
  );
  const occupation = useSelector(
    (state) => state.loan.loanDetails.loanUser.occupation
  );
  return (
    <div className={classes.userStory_div}>
      <p>
        <span className={classes.userStory_key}>Name</span> : {fullName}
      </p>
      <p>
        <span className={classes.userStory_key}>Occupation</span> : {occupation}
      </p>
      <p>
        <span className={classes.userStory_key}>Income</span> : {income}
      </p>
      <p style={{ whiteSpace: "pre-wrap" }}>
        <span className={classes.userStory_key}>Bio</span> : {bio}
      </p>
    </div>
  );
};
export default UserStory;
