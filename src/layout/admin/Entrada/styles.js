import styled from 'styled-components';

import { BackgroundImage, PositionAbsoluteCenter } from './../../../styles/mixins';
import { dark_brown, yellow_color } from './../../../styles/variables';

export const Container = styled.div`
  
`;

export const Encomenda = styled.div`
  display: block;
  text-align: center;
  border-bottom: 2px solid #333;
  margin-bottom: 2rem;

  #img {
    ${props => BackgroundImage(props.BG)};
    margin: 2rem auto 1rem auto;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: 0 0 .3rem rgba(0,0,0, .5);
  }

  #name {
    font-weight: bold;
    font-size: 1.8rem;
  }

  #price {
    font-weight: bold;
    font-size: 1.2rem;
  }

  #location {
    margin: 2rem 1rem;
    font-size: 2rem;
    background: #f5f5f5;
    padding: .5rem;
    border: 2px solid #f1f1f1;
  }

  #pname {
    font-weight: bold; 
  }

  #btns {
    button {
      margin: 1rem;
    }
  }
`;

export const Response = styled.div`
  width: 90%;
  max-width: 450px; 
  padding: 1rem;
  border-radius: 2%;
  ${PositionAbsoluteCenter(-100, 50)}
  ${props => props.visible ? `${PositionAbsoluteCenter(30,50)}; position: fixed` : ''};
  background: ${dark_brown};
  color: #fff;
  z-index: 100;
  text-align: center;

  input {
    border: 1px solid ${dark_brown};
    padding: .3rem .7rem;
    width: 97%;
    margin: 2rem auto;
    outline: none;
    font-size: 1.5rem;
    text-align: center;

    &:focus {
      border-color: ${yellow_color};
    }
  }
`;