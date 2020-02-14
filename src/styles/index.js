import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 12px;
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }
`;