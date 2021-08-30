import {
  GET_ACTIVE_LOANS,
  SET_CATEGORY_FILTER,
  GET_LOAN_BY_ID,
  CREATE_LEND_REQUEST,
} from "../types";

const initialState = {
  activeLoans: [],
  loanDetails: {},
  filterCategory: "",
  payment: [],
};
export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVE_LOANS:
      return {
        ...state,
        activeLoans: action.payload,
      };
    case GET_LOAN_BY_ID:
      return {
        ...state,
        loanDetails: action.payload,
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        filterCategory: action.payload,
      };

    case CREATE_LEND_REQUEST: {
      return {
        ...state,
        payment: action.payload,
      };
    }

    default:
      return state;
  }
}
