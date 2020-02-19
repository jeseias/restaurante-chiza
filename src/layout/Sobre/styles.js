import styled from 'styled-components';

import { dark_brown, light_gold } from './../../styles/variables';
import { BackgroundImage } from './../../styles/mixins';
import { SmoothTransition } from './../../styles/utils';

export const Container = styled.section`
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: 40% 60%;
  background: ${dark_brown};
`;

export const SobreBox = styled.div`
  padding: 5rem;

  h1 {
    color: ${light_gold};
    font-size: 4rem;
    text-align: center;
    font-family: 'Akronim'
  }

  p {
    color: #fff;
    font-size: 1.5rem;
    font-family: 'Dancing Script';
    letter-spacing: 2px;

    b {
      margin: 1rem;
      font-size: 2rem;
      text-decoration: underline;
    }
  }
`;

export const Gallery = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem; 
  grid-template-areas: 
    "one two three"
    "four five six"
    "seven seven six"
    "seven seven eight";

  > div {
    box-shadow: 0 0 .3rem ${light_gold}; 
    border-radius: 1rem;
    width: 100%; 
    ${SmoothTransition};

    &:hover {
      transform: scale(1.07);
    }
  } 

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

  .six {
    grid-area: six;
  }

  .seven {
    grid-area: seven;
  }

  .eight {
    grid-area: eight;
  }
`;

export const One = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Two = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Three = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Four = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Five = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Six = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Seven = styled.div`
  ${props => BackgroundImage(props.bg)};
`;

export const Eight = styled.div`
  ${props => BackgroundImage(props.bg)};
`;
