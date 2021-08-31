import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  loanInfo_main: {
    backgroundColor: "#15202B",
    position: "absolute",
    top: "0",
    bottom: "0",
  },
  loanInfo_subNav: {
    backgroundColor: "#15202B",
  },
  loanInfo_subMain: {
    backgroundColor: "#15202B",
    position: "relative",
    borderLeft: "2px solid #222D37",
    borderRight: "2px solid #222D37",
    padding: "0px 60px 0px 0px",
  },
  //Header
  loanInfo_headerText: {
    color: "#fff",
  },

  loanInfo_header: {
    padding: "6px 16px",
    borderBottom: "2px solid #222D37",
  },

  //Card
  loanCard_main: {
    boxShadow: "none",
  },
  loanCard_media: {
    minHeight: "400px",
    padding: "24px",
    backgroundColor: " rgba(17, 18, 16, 0.75)",
    backgroundBlendMode: "multiply",
  },
  loanCard_headerText: {
    fontSize: "1.63rem",
    color: "#fff",

    fontWeight: 500,
  },
  progressBar_main: {
    height: "16px",
    borderRadius: "40px",
    marginBottom: "0.5rem",
  },
  progressBar_colorPrimary: {
    backgroundColor: "#253341",
  },
  progressBar_barColorPrimary: {
    backgroundColor: "#fff",
  },
  loanCard_amtDiv: {
    display: "inline-flex",
    width: "100%",
    justifyContent: "space-between",
  },
  loanCard_keyIcon: {
    fontSize: "1.6rem",
    color: "#8899A6",
    marginTop: "5px",
    marginRight: "1%",
  },
  loanCard_key: {
    fontSize: "1.25rem",
    color: "#C3CCD3",
  },
  loanCard_value: {
    fontSize: "1.25rem",
    color: "#fff",
  },
  loanCard_xtraInfoDiv: {
    padding: "16px 0px",

    width: "100%",
  },
  loanCard_infoDiv: {
    width: " 100%",
    display: " inline-flex",
    justifyContent: " space-between",
  },
  loanCard_infoItem: {
    display: "inline-flex",
    width: "50%",
  },
  loanCard_btnDiv: {
    display: "inline-flex",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  loanCard_readBtn: {
    width: "25%",
    backgroundColor: "#15202B",
    border: "2px solid #BBF146",
    color: "#BBF146",
    letterSpacing: "1px !important",
  },
  loanCard_supportBtn: {
    width: "70%",
    backgroundColor: "#BBF146",
    border: "2px solid #BBF146",
    color: "#15202B",
    letterSpacing: "1px !important",
  },
  loanInfo_subnav: {
    padding: "2px 12px",
    borderBottom: "2px solid #222D37",
  },
  loanInfo_subnav_btns: {
    color: "#fff",
    letterSpacing: "1px",
  },
  userStory_div: {
    color: "#fff",
    padding: "10px 16px",
    fontWeight: "600",
  },
  userStory_key: {
    fontWeight: "500",
    color: "#DDE4EA",
  },
  guarantorDiv: {
    color: "#fff",
    padding: "10px 16px",
    fontWeight: "600",
  },
  guarantor_key: {
    fontWeight: "500",
    color: "#DDE4EA",
  },
  textFieldInput: {
    border: "1px solid #253341 !important",

    padding: "10px",
    backgroundColor: "#253341",
    color: "#BBF146",
    "&:not([multiple]) option": {
      backgroundColor: "#253341 !important",
    },
  },
  selectIcon: {
    color: "#BBF146",
  },
}));
