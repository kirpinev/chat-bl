import { ACTION_TYPES } from "../../constants";

export const setChatImage = (image) => {
  return {
    type: ACTION_TYPES.SET_CHAT_IMAGE,
    payload: image,
  };
};
