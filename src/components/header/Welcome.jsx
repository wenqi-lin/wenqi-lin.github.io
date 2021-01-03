import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.div`
  align-self: center;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  max-width: 60px;
  padding: 3px;
  margin-right: 3px;
`;

const Welcome = () => {
  const clickFunction = () => {
    window.location.assign("/");
  };
  return <WelcomeWrapper onClick={clickFunction}>Welcome</WelcomeWrapper>;
};

export default Welcome;
