import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

import { setUserLogin } from "../../redux/actions";

import { ROUTES } from "../../constants";

import { Form, Title, Input, Button, Error } from "../../uikit";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 320px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 25px;
`;

const Line = styled.hr`
  border: 1px solid #3c3844;
  margin: 40px 0 30px 0;
`;

const loginSchema = yup.object().shape({
  login: yup.string().min(2).max(30),
});

export const Login = () => {
  const [isInputValid, setIsInputValid] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ login }) => {
    dispatch(setUserLogin(login));
    setIsInputValid(!isInputValid);
  };

  return isInputValid ? (
    <Redirect to={ROUTES.CHAT} />
  ) : (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Login</StyledTitle>
        <Input
          type="text"
          name="login"
          placeholder="Enter your login"
          ref={register}
        />
        <Error>{errors.login?.message}</Error>
        <Line />
        <Button>Go to chat</Button>
      </Form>
    </Container>
  );
};
