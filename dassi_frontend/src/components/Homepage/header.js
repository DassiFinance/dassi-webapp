import React from "react";
import useStyles from "../../css/homepage";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.search_div}>
        <Typography variant="h6" className={classes.header_subHeader}>
          Home
        </Typography>
      </div>
      <div className={classes.search_div}>
        <Paper component="form" className={classes.search_root}>
          <IconButton
            type="submit"
            className={classes.search_iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.search_input}
            placeholder="Search a cause"
          />
        </Paper>
      </div>
    </React.Fragment>
  );
}
