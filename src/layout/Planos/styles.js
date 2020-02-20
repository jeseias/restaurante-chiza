import styled from 'styled-components';

import { yellow_color, dark_brown, light_gold  } from './../../styles/variables';
import { device  } from './../../styles/device';

export const Container = styled.section`
  padding: 1rem 5rem 3rem 5rem;
  position: relative;
  text-align: center;
  background: ${yellow_color};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-content: center;
    
    > div:nth-child(2) {
      clip-path: polygon(50% 0%, 100% 0, 100% 87%, 50% 100%, 0 87%, 0 0); 
    }

    > div:nth-child(3) {
      clip-path:  polygon(0 0, 100% 0, 100% 100%, 0 87%);
    }
  }

  > h1 {
    color: ${light_gold};

    &::after,  &::before {
      background: #fff;
    }
  }

  /* MQ */
  @media ${device.tablet} {
    > div {
      grid-template-columns: 1fr;
    }
  }

  @media ${device.mobileL} {
    padding: 2rem;
  }
`;

export const PlanoCard  = styled.div`
  background: ${dark_brown};
  color: #fff;
  padding: 3rem;
  box-shadow: inset 0 0 2rem #000, inset 0 0 1rem ${yellow_color};
  clip-path: polygon(0 0, 100% 0%, 100% 87%, 0% 100%);
  border: 5px solid #fff;
  border-bottom: none; 

  h1 {
    font-size: 2.5rem;
    font-family: 'Dancing Script';
  }

  p {
    padding: 2rem;
  }

  b {
    display: inline-block;
    padding: 1rem 2rem;
    border: 2px solid ${yellow_color};
    color: ${light_gold};
    margin: 1rem;
  }
`;
