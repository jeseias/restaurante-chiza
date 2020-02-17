import styled from 'styled-components';

import { light_brown, yellow_color, light_gold, dark_brown } from './../../styles/variables';
import { BackgroundImage } from './../../styles/mixins';

export const Container = styled.section`
  padding: 1rem 18rem 5rem 18rem;
  position: relative;
  text-align: center;
  background: ${light_gold};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  > h1 {
    color: ${yellow_color}; 

    &::after, &::before {
      background: ${light_brown};
    }
  }
`;

export const ClientCard = styled.div` 
  text-align: center; 
  height: 500px;  
  box-shadow: 0 0 .2rem ${dark_brown};
  border-radius: 2rem;
  background: #fff;

  .img {
    ${props => BackgroundImage(props.BG)};
    display: block;
    margin: 0 auto;
    height: 63%;
    width: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 87%, 0% 100%);

    &.img2 {
      clip-path: polygon(50% 0%, 100% 0, 100% 87%, 50% 100%, 0 87%, 0 0); 
    }

    &.img3 {
      clip-path:  polygon(0 0, 100% 0, 100% 100%, 0 87%);
    }
  } 

  h1 {
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    font-family: 'Pacifico';
    font-weight: bold;
    position: relative;
    top: -60px;
    text-transform: uppercase;
    font-size: 3.6rem;
    color: ${light_gold};
    text-shadow: 0 0 .6rem ${dark_brown};
  }

  p {
    color: ${dark_brown};
    position: relative;
    top: -40px;
    font-weight: bold;
    font-family: 'Pacifico';
    font-size: 1.5rem;
    padding: .3rem;
  }

  button {
    display: block;
    margin: 0 auto;
    position: relative;
    top: -18px;
    padding: 1rem 2rem;
    color: ${dark_brown};
    background: ${light_gold};
    border: none;
    border-radius: 3rem;
    font-family: 'Pacifico';
    box-shadow: 0 0 .3rem ${dark_brown};
    }
`;
