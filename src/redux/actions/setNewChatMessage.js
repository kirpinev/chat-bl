export const setNewChatMessage = (message) => {
  return {
    type: "SET_NEW_CHAT_MESSAGE",
    payload: message,
  };
};
