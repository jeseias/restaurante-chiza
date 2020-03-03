import styled from 'styled-components';

import { BackgroundImage } from './../../../styles/mixins';

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
    width: 170px;
    height: 170px;
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

  #btns {
    button {
      margin: 2rem;
    }
  }
`;
