import styled from 'styled-components';

import { yellow_color, red_color, dark_brown } from './variables';
import { MoveElement } from './mixins';
import { SmoothTransition } from './utils';

export const Button = styled.button`
  ${SmoothTransition};
  border-radius: 1rem;
  padding: .5rem 1rem;
  text-align: center;
  color: #fff; 
  outline: none;
  border: none;
  border: 1.5px solid transparent;
  backface-visibility: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    ${
      props => props.dbh ? 
        `background: ${dark_brown}; 
        border-color: ${yellow_color};` : `` 
    } 
  }

  ${MoveElement(3)};

  ${props => props.enviar  && `background: ${yellow_color}`}
  ${props => props.default  && `background: ${yellow_color}`}
  ${props => props.cancel && `background: #248bcc` }  
`; 