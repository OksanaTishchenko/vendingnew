import { ADD_CASH, CLEAR_CASH } from "../../constants";

const initialState = {
  cash: 0
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CASH:
      return {
        cash: +(state.cash + action.payload).toFixed(2)
      }
    case CLEAR_CASH:
      return {
        cash: 0
      }
    default:
      return state
  }
}
