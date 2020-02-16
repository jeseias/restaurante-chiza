import styled from 'styled-components';

import { light_gold, light } from './../../styles/variables';

export const Container = styled.section`
  padding: 1rem 5rem;
  position: relative;
  text-align: center;
  background: ${light};

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ClientCard = styled.div`
  padding: 1rem;
  text-align: center;

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
