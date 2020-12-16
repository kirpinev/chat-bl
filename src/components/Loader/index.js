import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #17151c;
`;

const loading = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  animation-name: ${loading};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:first-child {
    background-color: #f6655a;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    background-color: #ffb41f;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    background-color: #87c289;
    animation-delay: 0.4s;
    margin-right: 0;
  }
`;

export const Loader = () => (
  <Container>
    <Circle />
    <Circle />
    <Circle />
  </Container>
);
