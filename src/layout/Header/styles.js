import styled from 'styled-components';

import { red_color, light_gray, yellow_color, dark_brown } from './../../styles/variables';
import { PositionAbsoluteCenter, BackgroundImage } from './../../styles/mixins';
import { SmoothTransition } from './../../styles/utils';
 
export const Container = styled.header`
  ${props => BackgroundImage(props.BG)};
  position: relative;
  min-height: 650px;
  width: 100%; 
  color: #fff;
`;


export const TopHeader = styled.div`
  background: ${yellow_color};
  height: 25px;
  width: 100%;
  color: ${light_gray}; 
  font-size: 1.2em;
  padding: .2em 2rem;  

  display: flex; 
  justify-content: space-between; 

  svg {
    transform: scale(.7);
    margin-right: .5rem;
  } 
`;

export const Info = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 0 2rem; 
  ${SmoothTransition};

  * {
    ${SmoothTransition};
  } 

  > div {
    display: flex;
    overflow: hidden;
    position: relative;  
    margin-right: 1rem; 

    p { 
      position: relative;
      top: 2px;     
    } 

    svg {
      transform: scale(1)
    }
  }
`;

export const Social = styled.div`
  display: flex; 
  justify-content: space-between;

  a:link, a:visited, a:hover {
    color: #fff;
  }

  svg {
    ${SmoothTransition};

    &:hover {
      transform: scale(1);
      cursor: pointer;
    }
  }
`;

export const Navagation = styled.nav`
  background: ${dark_brown};
  color: #fff;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 .5rem .5rem rgba(0,0,0, .4);

  h1 {
    font-size: 3rem;
    font-family: 'Akronim';
  }

  ul { 
    margin: 0;
    list-style: none;
    
    a, a:active, a:link, a:visited {
      padding: 1rem; 
      text-decoration: none;
      color: #fff;
      margin-right: .5rem;
      text-align: center; 
    }

    .nav-bar {
      display: none; 
    }
  }
`;

export const HeaderContent = styled.div`
  ${PositionAbsoluteCenter(55,50)};   
  border-radius: 2rem;
  width: 70%;
  height: 70%;
  padding: 2rem; 
  
  h1 {
    text-align: center;
    font-size: 4.5rem;  
    color: #fff;
    text-shadow: 0 0 .1rem #f4f4f4;
  }

  > div {
    height: 90%;
  }

  div div {
    display: flex;
    justify-content: space-evenly; 
    align-items: center;
    align-content: center; 
    height: 100%; 

    p {
      font-size: 1.5rem;
      letter-spacing: 2px;
      font-weight: bold;
      text-shadow: 0 0 .3rem #000; 
    }

    button {
      border: none;
      color: #fff;
      padding: 1rem 2rem;
      text-align: center;
      font-size: 2rem;
      border-radius: 3rem;
      background: ${yellow_color};
      box-shadow: 0 .5rem .6rem ${dark_brown};
      ${SmoothTransition};

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }
`;
