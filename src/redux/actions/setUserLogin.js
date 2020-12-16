import { ACTION_TYPES } from "../../constants";

export const setUserLogin = (login) => {
  return {
    type: ACTION_TYPES.SET_USER_LOGIN,
    payload: login,
  };
};
