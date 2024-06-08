import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #1e1e1e;
`;

const Input = styled.input`
  width: 60%;
  padding: 12px 15px;
  margin-right: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 1em;

  &::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = () => (
  <SearchContainer>
    <Input type="text" placeholder="Search some apps/web apps....." />
    <Button>SEARCH</Button>
  </SearchContainer>
);

export default SearchBar;
