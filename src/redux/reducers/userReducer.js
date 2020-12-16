import { ACTION_TYPES } from "../../constants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_LOGIN:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
