import styled from 'styled-components';

import { dark_color, light_gray, transparent_color, t_dark_blue } from './../../styles/variables';
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
  background: #e19530;
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
  background: ${dark_color};
  color: #fff;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 .5rem .5rem rgba(0,0,0, .4);

  ul { 
    margin: 0;
    list-style: none;
    
    a, a:active, a:link, a:visited {
      padding: 1rem; 
      text-decoration: none;
      color: #fff;
      margin-right: 1rem;
      text-align: center;
    }

    .nav-bar {
      display: none; 
    }
  }
`;

export const HeaderContent = styled.div`
  ${PositionAbsoluteCenter(55,50)};
  background: linear-gradient( 290deg  , #0012, rgba(0,0,0, .4));
  border-radius: 2rem;
  width: 70%;
  height: 70%;
  padding: 2rem; 
  
  h1 {
    text-align: center;
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
  }
`;
