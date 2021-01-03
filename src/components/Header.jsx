import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.headerBackground};
`;

const Header = () => {
  return <HeaderContainer>I am a header</HeaderContainer>;
};

export default Header;
