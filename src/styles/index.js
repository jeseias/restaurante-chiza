import { createGlobalStyle } from 'styled-components';

import Akronim from './../fonts/Akronim.ttf';
import DancingScript from './../fonts/DancingScript.ttf';
import Pacifico from './../fonts/Pacifico.ttf';
import Poppins from './../fonts/Poppins.ttf';

export default  createGlobalStyle`
  @font-face {
    font-family: 'Akronim';
    src: ${Akronim};
  }

  @font-face {
    font-family: 'Dancing Script';
    src: ${DancingScript};
  }

  @font-face {
    font-family: 'Pacifico';
    src: ${Pacifico};
  }

  @font-face {
    font-family: 'Poppins';
    src: ${Poppins};
  }

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
    font-family: 'Poppins', monospace;
  } 
`;