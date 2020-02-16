import styled from 'styled-components';

export const Container = styled.section`
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: 35% 65%;
`;

export const SobreBox = styled.div`
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
    "seven seven six";

  > div {
    box-shadow: 0 0 .3rem rgba(0,0,0, .5);
    padding: 1rem;
    border-radius: 1rem;
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
`;
