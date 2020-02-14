import styled from 'styled-components';

import { dark_color, light_gray, transparent_color } from './../../styles/variables';
import { PositionAbsoluteCenter } from './../../styles/mixins';
 
export const Container = styled.header`
  width: 100%; 
  min-height: 650px;
  position: relative;
`;

export const TopHeader = styled.div`
  background: ${dark_color};
  height: 25px;
  width: 100%;
  color: ${light_gray}; 
  font-size: 1.2em;

  display: flex;
  justify-content: space-around;
`;

export const Navagation = styled.nav`
  background: ${transparent_color};
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 .4rem rgba(0,0,0, .5);

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
