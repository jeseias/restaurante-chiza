import styled from 'styled-components';

import { dark_brown, yellow_color, light_gold } from './../../../styles/variables'; 
import { BackgroundImage } from './../../../styles/mixins'; 
import { CenterContent } from './../../../styles/utils'; 
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

  @media ${device.laptopL} {
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
  grid-template-columns: auto auto 120px; 
  grid-gap: 1rem;
  grid-template-areas: 
    "title title img"
    "description description img"
    "btn price img";
  margin-bottom: 2rem; 
  background: ${light_gold};
  padding: 1rem;
  width: 100%;
  height: auto; 
  text-align: left;

  .img {
    display: block;
    ${props => BackgroundImage(props.BG)};
    grid-area: img;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .title {
    grid-area: title;
    font-family: 'Dancing Script';  
    text-align: left;
  }

  .description {
    grid-area: description; 
    font-size: 1rem;
    font-weight: bold; 
  }

  .price {
    grid-area: price;
    font-weight: bold;
    font-size: 1.3rem;
    padding: .4rem;
    position: relative; 
    text-align: center;
    ${CenterContent};
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
    display: block;   
    text-align: center;

    .img {
      border-radius: 100%;
      width: 150px;
      height: 150px;
      display: block;
      margin: 0 auto;
    }

    .title {
      text-align: center;
    }

    .price {
      text-align: center;
      justify-content: center;
    }

    .btn {
      margin-top: 1rem;
      padding: .5rem .5rem;
      column-span: 2 / 5;
      width: 100%;
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
