import styled from 'styled-components';

import { dark_brown } from './../../../styles/variables';
import { PositionAbsoluteCenter } from './../../../styles/mixins';
import { CenterContent } from './../../../styles/utils';

export const Container = styled.div`  
  background: ${dark_brown};
  ${CenterContent};
  justify-content: space-around;
  position: fixed;
  height: 50px;
  width: 100vw;
  bottom: 0;
  color: #fff;

  > div {
    padding: 1rem;
  }
`;
