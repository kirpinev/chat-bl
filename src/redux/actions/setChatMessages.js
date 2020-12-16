import { ACTION_TYPES } from "../../constants";

export const setChatMessages = (messages) => {
  return {
    type: ACTION_TYPES.SET_CHAT_MESSAGES,
    payload: messages,
  };
};
