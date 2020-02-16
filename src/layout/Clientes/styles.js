import styled from 'styled-components';

import { light_brown, dark_brown, yellow_color, light_gold } from './../../styles/variables';

export const Container = styled.section`
  padding: 1rem 5rem;
  position: relative;
  text-align: center;
  background: ${light_gold};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  > h1 {
    color: ${yellow_color}; 

    &::after, &::before {
      background: ${light_brown};
    }
  }
`;

export const ClientCard = styled.div`
  padding: 1rem;
  text-align: center;
  background: ${light_brown};

  .icon {
    display: block;
    margin: 0 auto;
  }

  h1 {
    font-weight: bold;
  }

  p {
    color: #ddd;
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
