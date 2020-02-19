import { createGlobalStyle } from 'styled-components';

import Akronim from './../fonts/Akronim.ttf';
import DancingScript from './../fonts/DancingScript.ttf';
import Pacifico from './../fonts/Pacifico.ttf';
import Poppins from './../fonts/Poppins.ttf';

import { dark_brown, light_gold, yellow_color } from './variables';

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
    overflow-x: hidden;
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

  #header, #menu, #clientes, #menu, #planos, #testemunhos, #sobre, #footer {
    min-width: 100vw;
  }

  /* Typogrady */
  .MainTitle {
    margin: 3rem;
    text-align: center;
    color: ${light_gold};
    font-size: 4rem;  
    text-shadow: 0 0 .3rem #333;
    font-family: 'Akronim';

    &::after, &::before {
      content: "";
      display: block;
      width: 10%;
      height: 3px;
      background: ${yellow_color};
      margin: 0 auto;
    }
  }

  .SecondaryColor {
    font-weight: bold;
    text-align: right;
    color: ${dark_brown};
    font-size: 2.8rem;
  }

  /* Typogrady */
  .MainTitle {
    margin: 3rem;
    text-align: center;
    color: ${light_gold};
    font-size: 4rem;  
    text-shadow: 0 0 .3rem #333;
    font-family: 'Akronim';

    &::after, &::before {
      content: "";
      display: block;
      width: 6%;
      height: 3px;
      background: ${yellow_color};
      margin: 0 auto;
    } 
  }

  .SecondaryTitle {
    font-weight: bold;
    text-align: right;
    color: ${dark_brown};
    font-size: 2.8rem;
  }
`;