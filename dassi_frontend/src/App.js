import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BorrowerApplication from "./pages/borrowerApplication";
import LoanInfo from "./pages/loanInfo";
import Storage from "./config/storage";
import { getUser } from "./redux/actions/user";
import { useSelector, useDispatch } from "react-redux";

//import "bootstrap/dist/css/bootstrap.min.css";

import createHistory from "history/createBrowserHistory";
const history = createHistory();
const { config } = Storage();
config();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Homepage} />
          <Route path="/baForm" exact component={BorrowerApplication} />
          <Route path="/loanInfo/:id" exact component={LoanInfo} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
