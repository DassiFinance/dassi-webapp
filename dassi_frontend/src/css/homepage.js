import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  homepage_main: {
    backgroundColor: "#15202B",
    position: "absolute",
    top: "0",
    bottom: "0",
  },
  homepage_subMain: {
    backgroundColor: "#15202B",
    position: "relative",
    borderLeft: "2px solid #222D37",
    borderRight: "2px solid #222D37",
  },
  homepage_subNav: {
    backgroundColor: "#15202B",
  },

  header_subHeader: {
    color: "#fff",
  },
  //Header
  search_div: {
    padding: "12px 16px",
    borderBottom: "2px solid #222D37",
  },
  search_root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#253341",
    boxShadow: "none",
    color: "#fff",
  },
  search_input: {
    flex: 1,
    color: "#8899A6",
  },
  search_iconButton: {
    padding: 10,
    color: "#fff",
  },
  //FilterOpt
  filter_main: {
    textAlign: "-webkit-center",
    overflow: "auto !important",
    whiteSpace: "nowrap !important",
    padding: "12px 16px 0px 16px",
    "&::-webkit-scrollbar": {
      width: "0px !important",
    },
    borderBottom: "2px solid #222D37",
  },
  filterBtn: {
    display: "inline-flex",
    minWidth: "100px",
    height: "3rem !important",
    zIndex: "1",
    margin: "0 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center !important",
    fontWeight: "600",
    height: "40px",
    padding: "0px 24px",

    borderRadius: "2rem",
    backgroundColor: "#C3CCD3",
  },
  active_filterBtn: {
    display: "inline-flex",
    minWidth: "100px",
    height: "3rem !important",
    zIndex: "1",
    margin: "0 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center !important",
    fontWeight: 600,
    height: "40px",
    padding: "0px 24px",
    borderRadius: "2rem",
    backgroundColor: "#8899A6",
  },
  filterBtnText: {
    marginTop: "1rem !important",
  },

  //DisplayLoans
  dispLoans_text: {
    fontSize: "18px",
    color: "#fff",
    fontWeight: 400,
    margin: "16px 12px",
  },
  loanCard_main: {
    backgroundColor: "#192734",
    margin: "18px 0",
    boxShadow: "none",
    padding: "12px 16px",
  },
  loanCard_headerText: {
    fontSize: "1.63rem",
    color: "#fff",

    fontWeight: 500,
  },
  loanCard_media: {
    height: "280px",
  },
  progressBar_main: {
    height: 10,
    borderRadius: 5,
    marginBottom: "0.5rem",
  },
  progressBar_colorPrimary: {
    backgroundColor: "#253341",
  },
  progressBar_barColorPrimary: {
    backgroundColor: "#DCFF8F",
  },
  loanCard_amtDiv: {
    display: "inline-flex",
    width: "100%",
    justifyContent: "space-between",
  },
  loanCard_xtraInfoDiv: {
    backgroundColor: "#253341",
    padding: "16px 12px",

    width: "100%",
  },
  loanCard_infoDiv: {
    width: " 100%",
    display: " inline-flex",
    justifyContent: " space-between",

    backgroundColor: " #253341",
  },
  loanCard_infoItem: {
    display: "inline-flex",
    width: "50%",
  },
  loanCard_readBtn: {
    width: "25%",
    backgroundColor: "#15202B",
    border: "2px solid #BBF146",
    color: "#BBF146",
    letterSpacing: "1px !important",
  },
  loanCard_supportBtn: {
    width: "75%",
    backgroundColor: "#BBF146",
    border: "2px solid #BBF146",
    color: "#15202B",
    letterSpacing: "1px !important",
  },
  loanCard_keyIcon: {
    fontSize: "1.6rem",
    color: "#8899A6",
    marginTop: "5px",
    marginRight: "1%",
  },
  loanCard_key: {
    fontSize: "1.25rem",
    color: "#8899A6",
  },
  loanCard_value: {
    fontSize: "1.25rem",
    color: "#fff",
  },
}));
