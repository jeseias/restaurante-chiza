import styled from 'styled-components';

import { dark_brown, light_gold } from './../../../styles/variables';
import { PositionAbsoluteCenter, BackgroundImage } from './../../../styles/mixins';
import { device } from './../../../styles/device';

export const Container = styled.div`
  padding: 1rem 5rem;
  position: relative;
  text-align: center;
  position: relative;  
  
  video { 
    position: absolute;
    object-fit: cover;
    display: block;
    height: 100%; 
    width: 100%;
    z-index: -1;
    left: 0;
    top: 0; 
  }

  @media ${device.laptop} {
    padding: 1rem 2rem;
  }
`;

export const TestimonialBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 6rem auto 4rem auto;
  width: 90%;  

  /* MQ */
  @media ${device.laptop} {
    width: 100%;
    grid-gap: 1rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 1rem; 

    > div:nth-child(1), div:nth-child(2) {
      margin-bottom: 3rem;
    }
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 1rem; 
  }
`; 

export const ClientBox = styled.div`  
  border-radius: 2rem; 
  position: relative;
  z-index: 10;  
  
  > div { 
    position: relative;
    padding: 1rem 2rem;
    padding-top: 140px;  
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba(0,0,0, .9);  
    background: ${light_gold};
    background: #fff;

    .img {
      ${props =>  BackgroundImage(props.bg)};
      box-shadow: 0 0 2rem rgba(0,0,0, .9);
      ${PositionAbsoluteCenter(12, 50)}; 
      border-radius: 100%;
      display: block;
      height: 160px;
      width: 160px; 
      z-index: 1000;
    }

    .name {
      font-weight: bold;
      font-size: 2.5rem;
      color: ${dark_brown};
      font-family: 'Pacifico';
    }

    b {
      color: #222;
    }

    h1 {
      font-family: 'Akronim';
      color: ${dark_brown};
      font-size: 6rem;
      margin-bottom: -3rem;
    }

    .saying {
      color: ${dark_brown};
      font-size: 1.4em;
      padding-bottom: 1rem;
      font-family: 'Pacifico';
    }
  } 

  /* MQ */
  /* @media ${device.tablet} { 
    margin-bottom: 3rem; 
  } */
`;