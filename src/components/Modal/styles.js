import styled from 'styled-components';

import { PositionAbsoluteCenter } from './../../styles/mixins';
import { dark_brown } from './../../styles/variables';
import { SmoothTransition } from './../../styles/utils';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  ${SmoothTransition};
  overflow: hidden; 
  position: fixed;
  display: block;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  /* opacity: ${props => props.visible ? 0 : 1}; */
  left: 0;
  top: ${props => props.visible ? '0' : '-150%'}; 

  .ContentDisplayed {
    ${PositionAbsoluteCenter(30, 50)};
    background: ${dark_brown};
    box-shadow: 0 0 2rem rgba(0,0,0, .5);
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 450px;
  }
`;
