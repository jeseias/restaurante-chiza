import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Main = styled.div`
  ${props => {
    if(!props.visible) {
      return `
        position: absolute;
        top: -120%;
        opacity: 0;
      `
    } else {
      return `
        position: relative;
        top: 0;
        opacity: 1;
      `
    }
  }}

  width: 100vw;
  height: 100vh; 
`;

export const MainContent = styled.div` 
  width: 100vw;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, auto));

  > div {
    border: 2px solid #f4f4f4;
    border-top-width: 20px;
    padding: 1rem;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
  }
`;

