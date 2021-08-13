import React, { Component } from "react";
import NavHome from "../components/navbar";

class Homepage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <NavHome />
        <h1>Welcome to dassi</h1>
      </div>
    );
  }
}

export default Homepage;
