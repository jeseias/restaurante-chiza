import styled from 'styled-components';

import { BackgroundImage, PositionAbsoluteCenter } from './../../styles/mixins';
import { device } from './../../styles/device';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${props => BackgroundImage(props.BG)};

  h1 {
    ${PositionAbsoluteCenter(20,50)};
    font-size: 7rem;
    width: 100%;
  }

  p {
    ${PositionAbsoluteCenter(55,50)};
    color: #fff;
    font-size: 3rem;
    text-align: center;
    text-shadow: 0 0 .3rem #000;
  }

  a {
    display: block;
    color: #fff;
    font-size: 2.5rem;
    margin-top: 1rem;
    text-shadow: 0 0 .3rem #000;
  }

  @media ${device.tablet} {
    h1 {
      position: relative;
      top: 30px;
      left: 0;
      transform: none;
      margin: 0;
      font-size: 5rem;
    }

    p {
      position: relative;
      top: 50px;
      left: 0;
      transform: none;
      font-size: 2rem;
    }
  }

`;
