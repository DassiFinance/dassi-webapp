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

axios.defaults.baseURL = "http://localhost:8080/api/";
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  console.log(userData);
  axios
    .post("user/login", userData)
    .then((res) => {
      if (res.data.token) {
        console.log(res.data);
        setAuthorizationHeader(res.data.token).then(() => {
          history.push("/");
          window.location.reload();
        });

        dispatch({
          type: SET_AUTHENTICATED,
        });

        dispatch({ type: CLEAR_ERRORS });
        console.log(userData.email);
      } else {
        console.log(res);
        dispatch({
          type: SET_ERROR_LOGIN,
          payload: res.data.error,
        });
      }
    })
    .catch((err) => {
      console.log(err.response.data.error);
      dispatch({
        type: SET_ERROR_LOGIN,
        payload: err.response.data.error,
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
    .post("user/register", newUserData)
    .then((res) => {
      console.log(res.data);
      if (res.data.error) {
        console.log(res.data.error);
        dispatch({
          type: SET_ERROR_SIGNUP,
          payload: res.data.error,
        });
      } else {
        console.log(res);
        setAuthorizationHeader(res.data.token).then(() => {
          history.push("/");
          window.location.reload();
        });
        dispatch({ type: SET_AUTHENTICATED });
        dispatch({ type: CLEAR_ERRORS });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERROR_SIGNUP,
        payload: err.response.data.error,
      });
    });
};

export const getUser = () => (dispatch) => {
  axios
    .get("user/profile")
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendUserDetails = (userDetails) => (dispatch) => {
  axios
    .post("user/userDetails", userDetails)
    .then((res) => {
      console.log(res.data);
    })
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      });
      console.log(res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });
};
