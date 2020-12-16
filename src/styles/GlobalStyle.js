import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: #17151c;
    box-sizing: border-box;
    padding: 10px;
  }
`;
