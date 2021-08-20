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
    borderLeft: "2px solid #222D37",
    borderRight: "2px solid #222D37",
  },
  ba_subNav: {
    backgroundColor: "#15202B",
  },
  textHeader: {
    color: "#fff",
    padding: "15px 24px",
  },
  textCommon: {
    color: "#fff",
  },
  review_header: {
    color: "#fff",
    padding: "24px 0px 0px 24px",
  },
  review_subheader: {
    color: "#fff",
    padding: "0px 0px 15px 0px",
    marginTop: "2%",
  },
  buttons: {
    width: "100%",
    display: "flex",
    marginBottom: "10%",
    marginTop: "5%",
    position: "relative",
  },
  button: {
    position: "absolute",
    backgroundColor: "#15202B",
    border: "2px solid #BBF146",
    color: "#BBF146",
    left: "2%",
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
    border: "1px solid #253341 !important",
    borderRadius: "4px !important",
    padding: "10px",
    backgroundColor: "#253341",
    color: "#fff",
    marginBottom: "10px",
    marginTop: "10px",
  },
  splitInputField: {
    border: "1px solid #253341 ",
    borderRadius: "4px 0 0 4px !important",
    padding: "10px",
    backgroundColor: "#253341",
    color: "#fff",
    marginBottom: "10px",
    marginTop: "10px",
    borderRight: "1px solid #8899A6",
  },
  splitSelectField: {
    border: "1px solid #253341 ",
    borderRadius: "0px 4px 4px 0px !important ",
    padding: "10px",
    backgroundColor: "#253341",
    color: "#fff",
    marginBottom: "10px",
    marginTop: "10px",
    borderLeft: "1px solid #8899A6 !px",
  },
  splitInputFieldGrid: {
    display: "flex",
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
    width: "150%",
  },
  imageDiv: {
    width: "100%",
    height: "300px",
  },
  stepper: {
    padding: "20px 0 20px",
    backgroundColor: "#15202B",
    borderBottom: "2px solid #222D37",
    borderTop: "2px solid #222D37",
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
    padding: "24px",
  },

  //Review
  ba_review_container: {
    marginBottom: "10%",
  },
  review_textFieldInput: {
    border: "1px solid #253341 !important",
    borderRadius: "4px !important",
    padding: "10px",
    backgroundColor: "#253341",
    color: "#fff",
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
