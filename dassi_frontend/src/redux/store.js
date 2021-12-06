import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import loanReducer from "./reducers/loanReducer";
const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducer,
  loan: loanReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
