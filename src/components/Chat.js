import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
import { StreamChat } from "stream-chat";
import styled from "styled-components";

import { Header } from "./Header";
import { Messages } from "./Messages";

import {
  setChatName,
  setChatMessages,
  setNewChatMessage,
  setChatImage,
} from "../redux/actions";

import {
  Chat as ChatContainer,
  Form,
  Input,
  Button,
  MessagesList,
} from "../uikit";

const StyledForm = styled(Form)`
  display: flex;
  max-width: 100%;
  padding: 0;
  border: 0;
`;

const StyledInput = styled(Input)`
  flex-grow: 5;
`;

const StyledButton = styled(Button)`
  width: 100px;
  margin-left: 10px;
`;

const messageSchema = yup.object().shape({
  message: yup.string().min(1).max(100),
});

export const Chat = () => {
  const [channel, setChannel] = useState(null);
  const [initChat, setInitChat] = useState(true);
  const [scrollFirstTime, setScrollFirstTime] = useState(true);
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(messageSchema),
  });
  const messagesContainerRef = useRef();
  const dispatch = useDispatch();

  const login = useSelector((state) => state.user.login);

  const scrollDown = () => {
    if (scrollFirstTime) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;

      setScrollFirstTime(!scrollFirstTime);
    } else if (
      messagesContainerRef.current.scrollTop +
        messagesContainerRef.current.clientHeight ===
      messagesContainerRef.current.scrollHeight
    ) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const initializeChat = async () => {
    try {
      const chatClient = await new StreamChat("kbxkkkfzd4av");
      await chatClient.setGuestUser({ id: login, name: login });
      const currChannel = chatClient.channel("messaging", "beelinetest", {
        name: "Beeline Test",
        image:
          "https://dictionary.cambridge.org/ru/images/thumb/bee_noun_002_02994.jpg?version=5.0.135",
      });
      await currChannel.watch();

      console.log(currChannel);

      dispatch(setChatName(currChannel.data.name));
      dispatch(setChatMessages(currChannel.state.messages));
      dispatch(setChatImage(currChannel._data.image));
      setChannel(currChannel);

      currChannel.on("message.new", (event) => {
        dispatch(setNewChatMessage(event.message));
        scrollDown();
      });

      setInitChat(!initChat);
    } catch (e) {
      setInitChat(!initChat);
      console.log(e);
    }
  };

  useEffect(() => {
    initializeChat();
  }, []);

  const onSubmit = async ({ message }) => {
    await channel.sendMessage({
      text: message,
    });
    reset();
  };

  if (initChat) {
    return <p>Грузим</p>;
  }

  return channel ? (
    <ChatContainer>
      <Header />
      <MessagesList ref={messagesContainerRef}>
        <Messages />
      </MessagesList>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput type="text" name="message" ref={register} />
        <StyledButton>Send</StyledButton>
      </StyledForm>
    </ChatContainer>
  ) : (
    <Redirect to="/" />
  );
};
