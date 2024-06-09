import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #1e1e1e;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
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

    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
