import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/user";
import ConnectBtn from "./wallet/connectBtn";
import RequestAirDrop from "./wallet/requestAirdrop";

// Material - UI
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//Icons
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SettingsIcon from "@material-ui/icons/Settings";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";

import Wallet from "./wallet/walletHelper";
import DescriptionIcon from "@material-ui/icons/Description";
import Icon from "@material-ui/core/Icon";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sideNav_text: {
    color: "#fff !important",
  },
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {},
    backgroundColor: "#15202b",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "25% !important",
    overflow: "hidden",
    backgroundColor: "#15202B",
    display: "flex",
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");
  const authenticated = useSelector((state) => state.user.authenticated);
  const username = useSelector((state) => state.user.credentials.username);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.sideNav_text}>
        <ListItem button>
          {/* <ListItemIcon className={classes.sideNav_text}>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary={`Hello ${username}!`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("Home")}
          component={Link}
          to={`/`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Home" ? <HomeIcon /> : <HomeOutlinedIcon />}
          </ListItemIcon>
          <ListItemText primary={`Home`} />
        </ListItem>
        <ListItem button onClick={() => setActive("Notifications")}>
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Notifications" ? (
              <NotificationsIcon />
            ) : (
              <NotificationsNoneIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={`Notifications`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("MyLoans")}
          component={Link}
          to={`/myLoans`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "MyLoans" ? <WorkIcon /> : <WorkOutlineIcon />}
          </ListItemIcon>
          <ListItemText primary={`My Loans`} />
        </ListItem>
        <ListItem button onClick={() => setActive("Bookmarks")}>
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Bookmarks" ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </ListItemIcon>
          <ListItemText primary={`Bookmarks`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("Borrow")}
          component={Link}
          to={`/baForm`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Borrow" ? (
              <Icon>paid</Icon>
            ) : (
              <Icon>
                <span className="material-icons-outlined">paid</span>
              </Icon>
            )}
          </ListItemIcon>
          <ListItemText primary={`Borrow`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("Wallet")}
          component={Link}
          to={`/wallet`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Wallet" ? (
              <AccountBalanceWalletIcon />
            ) : (
              <AccountBalanceWalletOutlinedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={`Wallet`} />
        </ListItem>
        <ListItem button onClick={() => setActive("Applications")}>
          <ListItemIcon className={classes.sideNav_text}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary={`Applications`} />
        </ListItem>
        <ListItem button onClick={() => setActive("Settings")}>
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Settings" ? <SettingsIcon /> : <SettingsOutlinedIcon />}
          </ListItemIcon>
          <ListItemText primary={`Settings`} />
        </ListItem>

        <ListItem button onClick={() => dispatch(logoutUser(props.history))}>
          <ListItemIcon className={classes.sideNav_text}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={`Logout`} />
        </ListItem>
        <Wallet name="connect" />
      </List>
    </div>
  );
  const drawerOff = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.sideNav_text}>
        <ListItem
          button
          onClick={() => setActive("Home")}
          component={Link}
          to={`/`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Home" ? <HomeIcon /> : <HomeOutlinedIcon />}
          </ListItemIcon>
          <ListItemText primary={`Home`} />
        </ListItem>
        <ListItem button component={Link} to={`/login`}>
          <ListItemIcon className={classes.sideNav_text}>
            <Icon>login</Icon>
          </ListItemIcon>
          <ListItemText primary={`Login`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("Borrow")}
          component={Link}
          to={`/baForm`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Borrow" ? (
              <Icon>paid</Icon>
            ) : (
              <Icon>
                <span class="material-icons-outlined">paid</span>
              </Icon>
            )}
          </ListItemIcon>
          <ListItemText primary={`Borrow`} />
        </ListItem>
        <ListItem
          button
          onClick={() => setActive("Wallet")}
          component={Link}
          to={`/wallet`}
        >
          <ListItemIcon className={classes.sideNav_text}>
            {active == "Wallet" ? (
              <AccountBalanceWalletIcon />
            ) : (
              <AccountBalanceWalletOutlinedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={`Wallet`} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {authenticated ? drawer : drawerOff}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);
