import { DECREMENT_COUNT } from "store/constants";

const initialState = {
  handover: [
    { id: 1, coin: 0.25, quantity: 10 },
    { id: 2, coin: 0.10, quantity: 20 },
    { id: 3, coin: 0.05, quantity: 30 },
  ]
}

export function handoverReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT_COUNT: {
      action.payload.map(item => {
        if (item.count > 0) {
          const idx = state.handover.findIndex(c => c.coin === item.bill)
          state.handover[idx].quantity -= item.count
        }
        return item
      })
    }
    default:
      return state
  }
}