import {
  GET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
  CLEAR_ERRORS,
  SET_ERROR_SIGNUP,
  SET_ERROR_LOGIN,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  loading: true,
  errLogin: null,
  errSignup: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...initialState,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR_SIGNUP:
      return {
        ...state,
        errSignup: action.payload,
        loading: false,
      };
    case SET_ERROR_LOGIN:
      return {
        ...state,
        errLogin: action.payload,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        credentials: action.payload,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errAuth: null,
        loading: false,
      };
    default:
      return state;
  }
}
