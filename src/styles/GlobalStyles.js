import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial, sans-serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #121212;
    color: #ffffff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
