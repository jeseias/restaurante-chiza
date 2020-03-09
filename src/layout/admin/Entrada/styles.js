import styled from 'styled-components';

import { BackgroundImage, PositionAbsoluteCenter } from './../../../styles/mixins';
import { dark_brown, yellow_color } from './../../../styles/variables';

export const Container = styled.div`
  ${props => {
    if(!props.visible) {
      return `
        display: none;
      `
    } else {
      return `
        display: block;
      `
    }
  }}

  .Message {
    width: 90%;
    max-width: 450px; 
    padding: 1rem;
    border-radius: 2%;
    background: ${dark_brown};
    color: #fff;
    z-index: 100;
    text-align: center;

    textarea {
      display: block;
      height: 200px;
      max-height: 100px;
    }

    button {
      margin: 1rem;
    }

    input, textarea {
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
  }

  .MainElements {
    display: block;
    text-align: center;
    border-bottom: 2px solid #333;
    margin-bottom: 2rem;

    #img {
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
  }
`;

export const Encomenda = styled.div`
  #img {
    ${props => BackgroundImage(props.BG)};
  }
`;

export const JaFeito = styled.div` 
  #img {
    ${props => BackgroundImage(props.BG)};
  }
`;

export const Response = styled.div` 
  ${PositionAbsoluteCenter(-100, 50)}
  ${props => props.visible ? `${PositionAbsoluteCenter(30,50)}; position: fixed` : ''}; 
`;

export const Rejection = styled.div` 
  ${PositionAbsoluteCenter(-100, 50)}
  ${props => props.visible ? `${PositionAbsoluteCenter(30,50)}; position: fixed` : ''}; 
`;

