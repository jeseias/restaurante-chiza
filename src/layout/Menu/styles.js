import styled from 'styled-components';

import { dark_brown } from './../../styles/variables'; 
import { BackgroundImage } from './../../styles/mixins'; 

export const Container = styled.section`
  padding: 2rem 5rem;
  position: relative;
  background: ${dark_brown};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  h1 {
    margin-bottom: 3rem;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    padding: 1rem; 
    font-family: 'Akronim';
  }
`;

export const Platebox = styled.div`
  border-radius: .5rem;
  display: grid;
  grid-template-columns: 150px auto auto; 
  grid-template-rows: 50px 40px 40px;
  grid-gap: 1rem;
  grid-template-areas: 
    "img title title"
    "img description description"
    "img price btn";
  margin-bottom: 2rem; 
  background: #fff;
  padding: 2rem;
  
  .img {
    display: block;
    ${props => BackgroundImage(props.BG)};
    grid-area: img;
    border-radius: 100%;
    border: 2px solid #333;
    width: 100%;
    height: 100%;
  }

  .title {
    grid-area: title;
    font-weight: bold;
    text-align: right;
  }

  .description {
    grid-area: description;
    text-align: right;
  }

  .price {
    grid-area: price;
    font-weight: bold;
  }

  .btn {
    grid-area: btn;
  }
`;
