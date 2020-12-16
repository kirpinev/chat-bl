export const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CHAT_MESSAGES":
      return { ...state, messages: [...action.payload] };
    case "SET_NEW_CHAT_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_CHAT_NAME":
      return { ...state, name: action.payload };
    case "SET_CHAT_IMAGE":
      return { ...state, image: action.payload };
    default:
      return state;
  }
};
