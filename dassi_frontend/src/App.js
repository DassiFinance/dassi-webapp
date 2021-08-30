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
import MyLoans from "./pages/myLoans";
import Wallet from "./pages/wallet";
import { SnackbarProvider } from "notistack";
import { getUser } from "./redux/actions/user";

//import "bootstrap/dist/css/bootstrap.min.css";

import createHistory from "history/createBrowserHistory";
const history = createHistory();
const { config } = Storage();
config();

const App = () => {
  useEffect(() => {
    if (store.getState().user.authenticated && localStorage.Token) {
      console.log(store.getState().user.authenticated);
      store.dispatch(getUser());
    }
  }, [store.getState().user.authenticated, localStorage.Token]);
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <BrowserRouter history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Homepage} />
            <Route path="/baForm" exact component={BorrowerApplication} />
            <Route path="/loanInfo/:id" exact component={LoanInfo} />
            <Route path="/myLoans" exact component={MyLoans} />
            <Route path="/wallet" exact component={Wallet} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
