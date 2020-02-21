import styled from 'styled-components';

import { yellow_color, red_color } from './../../styles/variables';
import { SmoothTransition } from './../../styles/utils';

export const Container = styled.div`
  padding: 0;
  margin: 0;

  form {
    grid-area: form;

    input, textarea {
      display: block;
      border: none;
      padding: .5rem;
      width: 100%;
      margin-bottom: 1rem;
      outline: none;
      border-bottom: 1px solid transparent;
      ${SmoothTransition};

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

  .btn {
    margin-bottom: .5rem;
    border-radius: 1rem;
    padding: 1rem 2rem;
    text-align: center;
    color: #fff;
    width: 100%;
    cursor: pointer;
    outline: none;
  }

  .enviar {
    background: ${yellow_color};
  }

  .cancel {
    background: ${red_color};
  }
`;

export const Encomendar = styled.div`
  display: grid;
  grid-template-areas: 30% 70%;
  grid-gap: 1rem;
  grid-template-areas: 
    "form item"
    "form config";
  
  .item {
    grid-area: item;
    text-align: center;
    color: #fff;
    padding-top: 2.2rem;

    .img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background: #fff;
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
  }
`;

export const CriarCliente = styled.div`

`;
