import styled from 'styled-components';

import { yellow_color } from './../../styles/variables';
import { SmoothTransition, CenterContent } from './../../styles/utils';
import { CenterElements, BackgroundImage } from './../../styles/mixins';
import { device } from './../../styles/device';

export const Container = styled.div`
  padding: 0;
  margin: 0;

  form {
    grid-area: form;

    input, textarea, select {
      border-bottom: 1px solid transparent;
      ${SmoothTransition};
      margin-bottom: 1rem;
      padding: .7rem 1.4rem;
      border-radius: .5rem;
      display: block;
      outline: none;
      border: none;
      width: 100%;

      &:focus {
        border-color: ${yellow_color};
      }
    }

    textarea {
      height: 90px;
      max-width: 100%;
      min-width: 100%;
    }
  }

`;

export const Encomendar = styled.div`

  .main {

    display: grid;
    grid-template-areas: 30% 70%;
    grid-gap: 1rem;
    grid-template-areas: 
      "form item"
      "config config";
    
    .item {
      grid-area: item;
      text-align: center;
      color: #fff;

      .img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        background: #fff;
        ${CenterElements(0)};
        ${props => BackgroundImage(props.BG)};
      }

      .name {
        font-weight: bold;
        font-size: 1.5rem;
      }

      .price {
        font-size: 1rem;
      }
    }

    .settings {
      grid-area: config; 
      
      button {
        width: 100%;
        ${CenterElements(.5)}
      }
    }
  }

  @media ${device.mobileL} {
    .main {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      grid-template-areas: 
        "item"
        "form"
        "config";
    }
  }
`;

export const CriarCliente = styled.div`
  button {
    width: 100%;
    ${CenterElements(.5)}
  }
`;

export const Login = styled.div`
  form {
    display: block;
    width: 100%;
  }
  
  button {
    width: 100%;
    ${CenterElements(.5)};
  }
`;

export const Compra = styled.div`
  ${CenterContent};
  flex-wrap: wrap;


  h1 {
    color: #fff;
    padding: 2rem;
  }

  #wait {
    color: #fff;
    
    p {
      margin-bottom: 1rem;
    }

    button {
      ${CenterContent};
      margin: .1rem auto;
    }

  }
`;
