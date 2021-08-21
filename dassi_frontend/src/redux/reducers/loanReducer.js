import { GET_ACTIVE_LOANS } from "../types";

const initialState = {
  activeLoans: [],
};
export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVE_LOANS:
      return {
        ...state,
        activeLoans: action.payload,
      };

    default:
      return state;
  }
}
