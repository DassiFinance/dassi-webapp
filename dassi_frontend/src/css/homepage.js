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
    width: "22%",
    maxWidth: "22% !important",
    flexBasis: "22% !important",
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
    backgroundColor: "#253341  !important",
    boxShadow: "none !important",
    color: "#fff !important",
  },
  search_input: {
    flex: 1,
    color: "#8899A6 !important",
  },
  search_iconButton: {
    padding: 10,
    color: "#fff !important",
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
    // height: "3rem !important",
    zIndex: "1",
    margin: "0 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center !important",
    fontWeight: "600",
    height: "40px",
    padding: "0px 24px",
    cursor: "pointer",

    borderRadius: "2rem",
    backgroundColor: "#C3CCD3",
  },
  active_filterBtn: {
    display: "inline-flex",
    minWidth: "100px",
    // height: "3rem !important",
    zIndex: "1",
    margin: "0 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center !important",
    fontWeight: 600,
    height: "40px",
    cursor: "pointer",
    padding: "0px 24px",
    borderRadius: "2rem",
    backgroundColor: "#8899A6",
  },
  filterBtnText: {
    marginTop: "1rem !important",
  },

  //DisplayLoans
  dispLoans_text: {
    fontSize: "18px  !important",
    color: "#fff !important",
    fontWeight: 400,
    margin: "16px 12px !important",
  },
  loanCard_main: {
    backgroundColor: "#192734 !important",
    margin: "18px 0 !important",
    boxShadow: "none !important",
    padding: "12px 16px !important",
  },
  loanCard_headerText: {
    fontSize: "1.63rem !important",
    color: "#fff !important",

    fontWeight: 500,
  },
  loanCard_media: {
    height: "280px !important",
  },
  progressBar_main: {
    height: "16px !important",
    borderRadius: "40px !important",
    marginBottom: "0.5rem !important",
  },
  progressBar_colorPrimary: {
    backgroundColor: "#253341 !important",
  },
  progressBar_barColorPrimary: {
    backgroundColor: "#DCFF8F !important",
  },
  loanCard_amtDiv: {
    display: "inline-flex !important",
    width: "100% !important",
    justifyContent: "space-between !important",
  },
  loanCard_xtraInfoDiv: {
    backgroundColor: "#253341 !important",
    padding: "16px 12px !important",

    width: "100% !important",
  },
  loanCard_infoDiv: {
    width: " 100% !important",
    display: " inline-flex !important",
    justifyContent: " space-between !important",

    backgroundColor: " #253341 !important",
  },
  loanCard_infoItem: {
    display: "inline-flex !important",
    width: "50% !important",
  },

  loanCard_readBtn: {
    width: "25% !important",
    backgroundColor: "#15202B !important",
    border: "2px solid #BBF146 !important",
    color: "#BBF146 !important",
    letterSpacing: "1px !important",
  },
  loanCard_supportBtn: {
    width: "75%  !important",
    backgroundColor: "#BBF146 !important",
    border: "2px solid #BBF146 !important",
    color: "#15202B !important",
    letterSpacing: "1px !important",
  },
  loanCard_keyIcon: {
    fontSize: "1.6rem !important",
    color: "#8899A6 !important",
    marginTop: "5px !important",
    marginRight: "1% !important",
  },
  loanCard_key: {
    fontSize: "1.25rem !important",
    color: "#8899A6 !important",
  },
  loanCard_value: {
    fontSize: "1.25rem !important",
    color: "#fff !important",
  },
  //Borrow
  borrow_readBtn: {
    justifyContent: "flex-end !important",
  },

  //SuccessStories
  homepage_success: {
    padding: "0px 16px !important",
    backgroundColor: "#15202B !important",
    width: "28% !important",
    maxWidth: "28% !important !important",
    flexBasis: "28% !important !important",
  },
  success_main: {
    backgroundColor: "#192734 !important",
  },
  successCard_main: {
    backgroundColor: "#192734 !important",
    boxShadow: "none !important",
    padding: "12px 16px !important",
    borderBottom: "2px solid #222D37 !important",
  },
  successCard_media: {
    height: "280px !important",
  },
  successCard_title: {
    marginTop: "16px !important",
    marginBottom: "0px !important",
    color: "#fff !important",
    letterSpacing: "1px !important",
  },
  successCard_category: {
    textTransform: "uppercase !important",
    letterSpacing: "1px !important",
    marginBottom: "8px !important",
    color: "#BBF146 !important",
  },
  success_solanaDiv: {
    color: "#fff !important",
    padding: "12px 16px !important",
    fontSize: "25px !important",
  },
  success_solana: {
    maxWidth: "50% !important",
  },
}));
