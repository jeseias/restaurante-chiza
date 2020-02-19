import styled from 'styled-components';

import { dark_brown, light_gold, yellow_color } from './../../styles/variables';
import { PositionAbsoluteCenter, BackgroundImage } from './../../styles/mixins';

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
    
    &::after {
      display: block;
      content: "";
      background: #D00;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const TestimonialBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 6rem auto 4rem auto;
  width: 90%;  
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

    .img {
      ${props =>  BackgroundImage(props.bg)};
      box-shadow: 0 0 2rem rgba(0,0,0, .9);
      ${PositionAbsoluteCenter(12, 50)}; 
      border-radius: 100%;
      display: block;
      height: 160px;
      width: 160px; 
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
`;