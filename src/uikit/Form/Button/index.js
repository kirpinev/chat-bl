import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  padding: 8px 20px;
  background: #ffb41f;
  border: none;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  font: normal bold 24px/36px "Helvetica Neue", "sans-serif";
  color: #000;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #d1941a;
  }
`;
