import styled from 'styled-components';

import { dark_brown, yellow_color, light_gold } from './../../../styles/variables'; 
import { BackgroundImage } from './../../../styles/mixins'; 
import { device } from './../../../styles/device'; 

export const Container = styled.section`
  padding: 2rem 5rem;
  position: relative;
  background: ${dark_brown};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
  } 

  @media ${device.laptop} {
    padding: 2rem 1rem;
  }

  @media ${device.tablet} {
    > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${device.mobileL} {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const Platebox = styled.div`
  border-radius: .5rem;
  display: grid;
  grid-template-columns: 150px auto auto;  
  grid-gap: 1rem;
  grid-template-areas: 
    "img title title"
    "img description description"
    "img price btn";
  margin-bottom: 2rem; 
  background: ${light_gold};
  padding: 2rem;
  font-family: 'Dancing Script';
  width: 100%;
  height: auto;

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
    display: block;
    grid-area: btn;
    border: none;
    background: ${yellow_color};
    color: ${light_gold};
    border-radius: 3rem;
    margin: 0 auto;
  }

  @media ${device.laptopL} {
    grid-template-columns: 120px auto auto;
    padding: 1rem;

    .title {
      font-size: 1.9rem;  
    }

    .price {
      font-size: 1rem;
      text-align: left;
    }

    .btn {
      padding: .5rem 1rem;
    }
  }

  @media ${device.laptop} {
    grid-gap: 0;
    grid-gap: .3rem;
    grid-template-areas: 
      "img title title"
      "img description description"
      "img price price"
      "img btn btn";

    .price {
      text-align: right;
    }

    .btn {
      margin-top: 1rem;
      padding: .5rem .5rem;
    }
  }

  @media ${device.tablet} {
    display: block;
    text-align: center;

    > * {
      margin-bottom: 1rem;
    }

    .img {
      display: block; 
      margin: 0 auto; 
      width: 150px;
      height: 150px;
    } 

    .title {
      text-align: center;
    }

    .description {
      text-align: center;
    }

    .price {
      text-align: center;
    }

    .btn {
      margin-top: .5rem;
      padding: .2rem 4rem;
      text-align: center;
    }
  }
`;
