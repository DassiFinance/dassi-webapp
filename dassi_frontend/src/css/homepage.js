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
    padding: "12px 15px",
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
    padding: "12px 15px",
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
    fontWeight: "600",
    height: "40px",
    padding: "0px 24px",
    borderRadius: "2rem",
    backgroundColor: "#8899A6",
  },
  filterBtnText: {
    marginTop: "1rem !important",
  },
}));
