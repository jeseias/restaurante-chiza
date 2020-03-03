import styled from 'styled-components';

import { dark_brown } from './../../../styles/variables';

export const Container = styled.div`
  color: ${dark_brown};

  p {
    margin-bottom: 2rem;
    
    span {
      padding: .3rem .8rem;
      border-radius: 20%; 
      background: green;
      color: #fff;

      &#red {
        background: #D00;
      }
    } 
  }
`;
