import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import Welcome from "./Welcome";
import Login from "./Login";

const HeaderContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 14rem;
  align-items: baseline;
`;

const HeaderItem = styled.div`
  flex-grow: 5;
  height: 40rem;
  align-self: flex-start;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem>
        <Welcome />
      </HeaderItem>
      <HeaderItem>
        <Clock />
      </HeaderItem>
      <HeaderItem>
        <Login />
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
