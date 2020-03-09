import styled from 'styled-components';

import { dark_brown } from './../../../styles/variables';
import { CenterContent, SmoothTransition } from './../../../styles/utils';

export const Container = styled.div`
  background: ${dark_brown};
  ${CenterContent};
  ${SmoothTransition};
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  ${props => {
    if(!props.visible) {
      return `
        position: absolute;
        top: -120%;
        opacity: 0;
      `
    } 
  }}

  div {
    padding: .5rem;
    background: #fff;
    width: 100%;
    max-width: 450px;
    
    h1 {
      color: ${dark_brown}
    }

    input {
      border: none;
      padding: .3rem .6rem;
      outline: none;
      border: 2px solid ${dark_brown};
    }

    input, button {
      display: block;
      width: 90%;
      margin: 1rem auto;
    }
  }
`;
