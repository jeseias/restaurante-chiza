import styled from 'styled-components';

import { yellow_color, dark_brown } from './../../../styles/variables';
import { CenterContent } from './../../../styles/utils';
import { device } from './../../../styles/device';

export const Container = styled.section`
  background: ${yellow_color};
`;

export const Top = styled.div`
  padding: 3rem;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    background: ${dark_brown}; 
    padding: 2rem;
    width: 30%;
    color: #fff;
    padding: 2rem;
    padding-top: 5rem;
    box-shadow: inset 0 0 2rem #000, inset 0 0 1rem ${yellow_color};
    border: 5px solid #fff;
    border-top: none;

    &:nth-child(1) {
      clip-path: polygon(0 0, 100% 18%, 100% 100%, 0% 100%);

      .icons {
        ${CenterContent};

        svg {
          position: relative;
          top: 1.2rem;
          margin: .6rem;
        }
      }
    }

    &:nth-child(2) {
      clip-path:  polygon(50% 0, 100% 18%, 100% 100%, 50% 100%, 0 100%, 0 18%);

      p {
        position: relative;
        top: .8rem;
        ${CenterContent};
      }
    }

    &:nth-child(3) {
      clip-path: polygon(0 18%, 100% 0, 100% 100%, 0% 100%);
      
      p {
        position: relative;
        top: 1.2rem;
        ${CenterContent};
        text-align: center;
      }
    }

    h2 {
      font-size: 2.5rem;
      font-family: 'Dancing Script';
      text-align: center;
    }

    .mainIcon {
      display: block;
      margin: 1rem auto;
    }

  }

  /* MQ */
  @media ${device.laptop} {
    width: 100%;
    padding: 2rem 1rem;

    > div {
      width: 32%;
      padding: 5rem 1rem 2rem 1rem; 
    }
  }

  @media ${device.tablet} {
    display: block;

    > div {
      margin: 1rem auto;
      width: 80%;

      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        clip-path: none;
        padding: 2rem;
      }
    }
  }

`;

export const Bottom = styled.div` 
  color: #fff;
  background: ${dark_brown};
  padding: 1rem;
  text-align: center;

  a {
    color: #fff;
    font-weight: bold;
  }
`;
