import { GET_ACTIVE_LOANS, SET_CATEGORY_FILTER } from "../types";

const initialState = {
  activeLoans: [],
  filterCategory: "",
};
export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVE_LOANS:
      return {
        ...state,
        activeLoans: action.payload,
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        filterCategory: action.payload,
      };

    default:
      return state;
  }
}
