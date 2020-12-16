export const setChatMessages = (messages) => {
  return {
    type: "SET_CHAT_MESSAGES",
    payload: messages,
  };
};
