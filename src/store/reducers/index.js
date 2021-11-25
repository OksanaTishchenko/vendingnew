import { combineReducers } from "redux";
import { goodsReducer } from "./goods/goods";
import { userReducer } from "./userCash/userCash";
import { handoverReducer } from "./handover/handover";

export const rootReducer = combineReducers({
  goods: goodsReducer,
  userCash: userReducer,
  handover: handoverReducer
})
