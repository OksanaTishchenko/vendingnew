const initialState = {
  handover: [
    { id: 1, coin: 0.25, quantity: 10 },
    { id: 2, coin: 0.10, quantity: 20 },
    { id: 3, coin: 0.05, quantity: 30 },
  ]
}

export function handoverReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}