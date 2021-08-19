import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  //borrowApplication
  ba_main: {
    backgroundColor: "#15202B",
    position: "absolute",
    top: "0",
    bottom: "0",
  },
  ba_subMain: {
    backgroundColor: "#15202B",
    position: "relative",
  },
  ba_subNav: {
    backgroundColor: "#15202B",
  },
  textCommon: {
    color: "#fff",
  },
  buttons: {
    width: "100%",
    display: "flex",
    marginBottom: "2%",
    marginTop: "5%",
    position: "relative",
  },
  button: {
    backgroundColor: "#15202B",
    border: "2px solid #BBF146",
    color: "#BBF146",

    letterSpacing: "1px !important",
  },
  buttonN: {
    position: "absolute",
    backgroundColor: "#15202B",
    border: "2px solid #BBF146",
    color: "#BBF146",
    right: "2%",
    letterSpacing: "1px !important",
  },
  textFieldInput: {
    border: "1px solid #253341",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#253341",
    color: "#fff",
    marginBottom: "10px",
    marginTop: "10px",
  },
  textFieldUnderline: {
    "&:before": {
      borderBottom: "0px",
    },
    "&:after": {
      borderBottom: "0px",
    },
  },
  textFieldLabel: {
    fontSize: "20px",
    color: "#fff",
  },

  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: "#15202B",
  },
  step: {
    color: "#BBF146 !important",
    fontSize: "2rem !important",
  },
  completed: {
    color: "#BBF146 !important",
  },
  active: {
    color: "#BBF146 !important",
  },
  text: {
    fill: "#253341 !important",
    fontWeight: "600",
  },
  subHeader: {
    color: "#fff",
  },

  //Review
  ba_review_container: {
    marginBottom: "10%",
  },

  //personalDetails

  /* wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },*/
}));
/*
textFieldInput:{
border: "1px solid #253341",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "#253341",
    color: "#fff",}*/
