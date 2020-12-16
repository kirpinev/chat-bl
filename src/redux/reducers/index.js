import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { chatReducer } from "./chatReducer";

export const reducers = combineReducers({
  user: userReducer,
  chat: chatReducer,
});
