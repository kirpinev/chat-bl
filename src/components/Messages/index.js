import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import { MessageContainer, MessageText, MessageAuthor } from "../../uikit";

export const Messages = () => {
  const chatMessages = useSelector((state) => state.chat.messages);

  const renderMessages = useCallback(() => {
    return chatMessages.map(({ text, user, id }) => (
      <MessageContainer key={id}>
        {user.name && <MessageAuthor>{user.name}</MessageAuthor>}
        <MessageText>{text}</MessageText>
      </MessageContainer>
    ));
  }, [chatMessages]);

  return <div>{renderMessages()}</div>;
};
