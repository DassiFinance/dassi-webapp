import React from "react";

import "../css/navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../redux/actions/userActions";

const NavHome = (props) => {
  return (
    <Navbar className="nav_main" expand="lg">
      <Navbar.Brand className="nav_mainLogo" href="/">
        Dassi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav_collapse">
        <Nav className="mx-auto"></Nav>

        {!props.user.authenticated ? (
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/login" className="navbar_opt">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup" className="navbar_opt">
                Signup
              </Nav.Link>
            </Nav.Item>{" "}
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                className="navbar_opt"
                onClick={() => props.logoutUser(props.history)}
              >
                Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
NavHome.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionToProps = {
  logoutUser,
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(NavHome));
