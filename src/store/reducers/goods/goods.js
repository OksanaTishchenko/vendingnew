import { ADD_GOODS } from "store/constants";

const initialState = {
  goods: []
}

export function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOODS:
      return {
        goods: action.payload
      }

    default:
      return state
  }
}
