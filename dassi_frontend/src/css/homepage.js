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
    display: "inline-flex",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  filterBtn: {
    height: "40px",
    borderRadius: "2rem",
    backgroundColor: "#C3CCD3",
    padding: "8px 24px 10px 32px",
    marginRight: "2%",
  },
  active_filterBtn: {
    height: "40px",
    borderRadius: "2rem",
    backgroundColor: "#8899A6",
    padding: "8px 24px 10px 32px",
    marginRight: "2%",
  },
}));
