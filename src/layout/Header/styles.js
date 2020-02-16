import styled from 'styled-components';

import { light_gray, yellow_color, dark_brown } from './../../styles/variables';
import { PositionAbsoluteCenter, BackgroundImage } from './../../styles/mixins';
import { SmoothTransition } from './../../styles/utils';
 
export const Container = styled.header`
  ${props => BackgroundImage(props.BG)};  
  position: relative;
  min-height: 650px;
  width: 100%; 
  color: #fff;
`; 

export const Navagation = styled.nav`
  background: ${dark_brown};
  color: #fff;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 .5rem .5rem rgba(0,0,0, .4);
    font-family: 'Dancing Script';

  h1 {
    font-size: 3rem;
    letter-spacing: 4px;
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
      text-transform: uppercase;
      letter-spacing: 2px;
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
    font-size: 5rem;  
    color: #fff;
    text-shadow: 0 0 .1rem #f4f4f4;
    font-family: 'Dancing Script';
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 0 .3rem #333;
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
