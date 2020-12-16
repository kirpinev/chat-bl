import { ACTION_TYPES } from "../../constants";

export const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CHAT_MESSAGES:
      return { ...state, messages: [...action.payload] };
    case ACTION_TYPES.SET_NEW_CHAT_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case ACTION_TYPES.SET_CHAT_NAME:
      return { ...state, name: action.payload };
    case ACTION_TYPES.SET_CHAT_IMAGE:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};
