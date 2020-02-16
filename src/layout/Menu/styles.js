import styled from 'styled-components';

import { dark_brown, yellow_color, light_gold } from './../../styles/variables'; 
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
  background: ${light_gold};
  padding: 2rem;
  font-family: 'Dancing Script';

  .img {
    display: block;
    ${props => BackgroundImage(props.BG)};
    grid-area: img;
    border-radius: 100%; 
    width: 100%;
    height: 100%;
  }

  .title {
    grid-area: title;
  }

  .description {
    grid-area: description;
    text-align: right;
    font-size: 1rem;
    font-weight: bold;
  }

  .price {
    grid-area: price;
    font-weight: bold;
    font-size: 2rem;
    position: relative;
    top: 6px;
    text-align: center;
  }

  .btn {
    grid-area: btn;
    border: none;
    background: ${yellow_color};
    color: ${light_gold};
    border-radius: 3rem;
  }
`;
