import { ADD_GOODS, ADD_CASH, CLEAR_CASH, DECREMENT_COUNT } from "../constants";

export const setGoods = (array) => ({ type: ADD_GOODS, payload: array });
export const addCash = (number) => ({ type: ADD_CASH, payload: number });
export const clearCash = () => ({ type: CLEAR_CASH });
export const decrementCount = (arr) => ({ type: DECREMENT_COUNT, payload: arr });