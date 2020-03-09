import styled from 'styled-components';

export const Container = styled.div`
  ${props => {
    if(!props.visible) {
      return `
        display: none;
      `
    } else {
      return `
        display: block;
      `
    }
  }}
`;

export const ClientBox = styled.div`
  border-bottom: 2px solid #333;
  padding: 2rem;
`;
