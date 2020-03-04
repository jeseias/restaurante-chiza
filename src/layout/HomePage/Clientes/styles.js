import styled from 'styled-components';

import { light_brown, yellow_color, light_gold, dark_brown } from './../../../styles/variables';
import { BackgroundImage } from './../../../styles/mixins';
import { device } from './../../../styles/device';

export const Container = styled.section`
  padding: 1rem 2rem;
  position: relative;
  text-align: center;
  background: ${light_gold};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
    width: 80%;
  }

  > h1 {
    color: ${yellow_color}; 

    &::after, &::before {
      background: ${light_brown};
    }
  }

  /* MQ */
  @media ${device.laptop} {
    padding: 2rem .5rem;

    > div {
      width: 100%;
      grid-gap: 1rem;
      padding: .5rem;
    }
  }

  @media ${device.tablet} {
    > div {
      grid-template-columns: 1fr;
      width: 80%;
    }
  }

  @media ${device.mobileL} {
    > div {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
`;

export const ClientCard = styled.div` 
  text-align: center; 
  height: 500px;  
  border-radius: 2rem;
  background: #fff;
  overflow: hidden;

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
    font-size: 2.4rem;
    color: #fff;
    text-shadow: 0 0 .6rem ${dark_brown};
    width: 100%;
  }

  p {
    color: ${dark_brown};
    position: relative;
    top: -20px;
    font-weight: bold;
    font-size: 1.3rem;
    padding: .3rem;
  }

  button {
    display: block;
    margin: 0 auto;
    position: relative;
    padding: 1rem 2rem;
    color: ${dark_brown};
    background: ${light_gold};
    border: none;
    border-radius: 3rem; 
    box-shadow: 0 0 .3rem ${dark_brown};
    outline: none;
    cursor: pointer;
  }

  @media ${device.tablet} {
    padding-bottom: 0;
  }

`;
