import React from "react";
import { useSelector } from "react-redux";

import { Header as HeaderContainer, ChatName, ChatImage } from "../uikit/Chat";

export const Header = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <HeaderContainer>
      <ChatImage src={chat.image} alt="Пчёлка" width="35" height="35" />
      <ChatName>{chat.name}</ChatName>
    </HeaderContainer>
  );
};
