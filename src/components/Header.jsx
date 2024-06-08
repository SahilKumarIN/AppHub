import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #1e1e1e;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #fff;
`;

const Nav = styled.nav`
  a {
    margin-left: 20px;
    font-size: 1.1em;
    color: #bbb;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>Sahil Kumar Project's</Title>
    <Nav>
      <a href="/">App Dev</a>
      <a href="/">Web Dev</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
