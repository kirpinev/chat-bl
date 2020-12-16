import { ACTION_TYPES } from "../../constants";

export const setNewChatMessage = (message) => {
  return {
    type: ACTION_TYPES.SET_NEW_CHAT_MESSAGE,
    payload: message,
  };
};
