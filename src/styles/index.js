import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Akronim|Dancing+Script|Parisienne&display=swap');

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 12px;
    font-family: 'Dancing Script';
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, button {
    font-family: 'Dancing Script', Arial, monospace ;
  }
`;