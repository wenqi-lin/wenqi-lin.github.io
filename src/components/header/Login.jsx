import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  align-self: center;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  max-width: 60px;
  padding: 3px;
  margin-right: 3px;
`;

const Login = () => {
  const clickFunction = () => {
    window.location.assign("/login");
  };
  return <LoginWrapper onClick={clickFunction}>Login</LoginWrapper>;
};

export default Login;
