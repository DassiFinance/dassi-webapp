import React from "react";
import useStyles from "../../css/homepage";
import { Grid } from "@material-ui/core";

const Stories = () => {
  const classes = useStyles();

  return (
    <Grid>
      <h5 className={classes.stories_header}>Success Stories</h5>
    </Grid>
  );
};

export default Stories;
