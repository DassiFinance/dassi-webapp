import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BorrowerApplication from "./pages/borrowerApplication";
import Storage from "./config/storage";

//import "bootstrap/dist/css/bootstrap.min.css";
const history = require("history").createBrowserHistory();
const { config } = Storage();
config();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Homepage} />
            <Route path="/baForm" exact component={BorrowerApplication} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
