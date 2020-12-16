import styled from "styled-components";

export const Input = styled.input`
  font: normal normal 20px/32px "Helvetica Neue";
  letter-spacing: 0.22px;
  color: #eeecf1;

  box-sizing: border-box;
  padding: 12px 24px;
  margin: 0;

  height: 56px;
  width: 100%;

  background: #2a2731;
  border: 2px solid #000;
  border-radius: 10px;

  outline: none;

  &:hover,
  &:focus {
    border: 2px solid #76a9ff;
  }

  &::placeholder {
    font: normal normal 20px/32px "Helvetica Neue";
    letter-spacing: 0.22px;
    color: #7a7585;
  }
`;
