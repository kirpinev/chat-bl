import styled from "styled-components";

export { Header } from "./Header";
export { ChatName } from "./ChatName";
export { ChatImage } from "./ChatImage";
export { MessagesList } from "./MessagesList";
export { MessageContainer } from "./MessageContainer";
export { MessageText } from "./MessageText";
export { MessageAuthor } from "./MessageAuthor";

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
