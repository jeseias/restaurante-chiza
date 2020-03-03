import styled from 'styled-components';

import { dark_brown } from './../../../styles/variables';
import { CenterContent } from './../../../styles/utils';

export const Container = styled.div`
  background: ${dark_brown};
  ${CenterContent};
  justify-content: space-evenly; 
  flex-wrap: wrap;
  width: 100vw;
  height: 50px;
  color: #fff;
`;
