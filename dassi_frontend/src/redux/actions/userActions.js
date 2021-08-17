import axios from "axios";
import {
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
  CLEAR_ERRORS,
  SET_ERROR_SIGNUP,
  SET_ERROR_LOGIN,
  GET_USER,
} from "../types";
import Storage from "../../config/storage";
const { setAuthorizationHeader } = Storage();

axios.defaults.baseURL = "http://localhost:8080/api/user/";
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  console.log(userData);
  axios
    .post("login", userData)
    .then((res) => {
      if (res.data.token) {
        console.log(res.data);
        setAuthorizationHeader(res.data.token).then(() => history.push("/"));

        dispatch({
          type: SET_AUTHENTICATED,
        });

        dispatch({ type: CLEAR_ERRORS });
        console.log(userData.email);
      } else {
        console.log(res);
        dispatch({
          type: SET_ERROR_LOGIN,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch({
        type: SET_ERROR_LOGIN,
        payload: err.response.data.message,
      });
    });
};

export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("Token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  history.push("/");
};
export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("register", newUserData)
    .then((res) => {
      console.log(res.data);
      if (res.data.message) {
        console.log(res.data.message);
        dispatch({
          type: SET_ERROR_SIGNUP,
          payload: res.data.message,
        });
      } else {
        console.log(res);
        setAuthorizationHeader(res.data.token).then(() => history.push("/"));
        dispatch({ type: SET_AUTHENTICATED });
        dispatch({ type: CLEAR_ERRORS });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERROR_SIGNUP,
        payload: err.response.data.message,
      });
    });
};

export const getUser = () => (dispatch) => {
  axios
    .get("getUser")
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data[0],
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};