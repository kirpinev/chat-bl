import { ACTION_TYPES } from "../../constants";

export const setChatName = (name) => {
  return {
    type: ACTION_TYPES.SET_CHAT_IMAGE,
    payload: name,
  };
};
