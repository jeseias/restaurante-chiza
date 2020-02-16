import styled from 'styled-components';

import { light_gold, yellow_color } from './variables';

export const Title = styled.h1`
  margin: 3rem;
  text-align: center;
  color: ${light_gold};
  font-size: 4rem;  
  text-shadow: 0 0 .3rem #333;
  font-family: 'Akronim';

  &::after, &::before {
    content: "";
    display: block;
    width: 6%;
    height: 3px;
    background: ${yellow_color};
    margin: 0 auto;
  } 
`;