import styled from 'styled-components';

import { yellow_color, dark_brown, light_gold } from './../../styles/variables';
import { BackgroundImage, MoveElement, PositionAbsoluteCenter } from './../../styles/mixins';
import { SmoothTransition, CenterContent } from './../../styles/utils';
import { device  } from './../../styles/device';
 
export const Container = styled.header`
  ${props => BackgroundImage(props.BG)};  
  position: relative; 
  padding-bottom: 5rem;
  width: 100%;
  min-width: 100vw;  
`; 

export const Navagation = styled.nav`
  background: ${dark_brown}; 
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  box-shadow: 0 .5rem .5rem rgba(0,0,0, .4);
  font-family: 'Dancing Script';
  color: #fff; 
  margin: 0 auto; 
  min-width: 100vw;

  h1 {
    font-size: 3rem;
    letter-spacing: 4px;
    margin-right: 8rem;
  }

  .nav-bar {
    display: none; 
  }

  ul { 
    display: block;
    margin: 0;
    list-style: none;
    height: 100%;  
    ${CenterContent};
    
    a, a:active, a:link, a:visited {
      padding: 1rem; 
      text-decoration: none;
      color: #fff;
      margin-right: .5rem;
      text-align: center;  
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  /* Media Querias */
  @media ${device.laptop} {
    justify-content: space-between;
    padding: 1.4rem .4rem;

    h1 {
      margin: 0; 
    } 

    ul {
      padding: 0;
      ${MoveElement(5)}

      a,  a:active, a:link, a:visited {
        margin: 0;
        padding: 0 1rem;
        letter-spacing: 0; 
      }
    }
  }

  @media ${device.tablet} { 
    position: relative;  
    display: block;
    padding: 0;

    h1 {
      padding: 1rem 4rem;
      width: 100%;
      border-bottom: 1px solid ${light_gold};
    }

    .nav-bar {
      ${PositionAbsoluteCenter(47, 92)};
      ${SmoothTransition};
      display: block;
      z-index: 120;

      &.active {
        color: ${dark_brown};
      }
    } 

    ul {
      box-shadow: 0 0 1rem ${dark_brown};
      padding: 7rem 2rem 2rem 2rem;
      background: ${light_gold}; 
      ${SmoothTransition};   
      position: fixed;
      display: block;
      height: 100vh; 
      z-index: 100;
      right: -100%;
      width: 50vw;
      top: 0;

      &.active {
        right: 0;
      }

      a, a:active, a:link, a:visited  {
        display: block;
        width: 100%; 
        padding: 0;
        letter-spacing: 2px; 
        padding: 1rem 2rem;
        margin-bottom: .4rem;
        text-align: right;
        z-index: 10;
        color: ${dark_brown};
        font-weight: bold;
        font-size: 1.3rem;
      }

    }

    &.active {
      
      ul {
        right: 0;
      }
    }

  }

  @media ${device.mobileL} { 

    h1 {
      padding: 1rem; 
      font-size: 2.2rem;  
    }

    .nav-bar {
      ${PositionAbsoluteCenter(27, 86)};
      transform: scale(.8);
    }

    ul {
      width: 80vw;
    }
  }

`;

export const HeaderContent = styled.div`
  display: block;
  margin: 4rem auto 0;   
  border-radius: 2rem;
  width: 70%;
  height: 70%;
  padding: 2rem;  
  font-family: 'Dancing Script'; 
  
  h1 {
    text-align: center;
    font-size: 5rem;    
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 0 .5rem #333;
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
      font-size: 3rem;
      letter-spacing: 2px;
      font-weight: bold;
      text-shadow: 0 0 .5rem #333; 
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
