import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 5rem;
  position: relative;
  text-align: center;
`;

export const TestimonalSlider = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 8% auto 8%;
  grid-template-areas: 
    "left main right";

  .left  {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .main {
    background: #002b54;
    grid-area: main;
    padding: 4rem;
    overflow: hidden;
    
    > div {
      display: flex;
      width: calc(100% * 3 + 150px);
    }
  }
`;

export const SlideItem = styled.div`
  background: #f4f4f4; 
  transform: skewX(-15deg); 
  padding: 1rem 2rem;
  margin-right: 50px;
  border-radius: 2rem;

  > div {
    width: 70%;
    margin: .5rem auto; 
    transform: skewX(15deg);
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      "img content"; 
    
    img {
      grid-area: img;
      width: 150px;
      height: 150px;
      background: #333;
      border-radius: 100%;
    } 

    > div {
      grid-area: content;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }

    .title {
      font-weight: bold;
    }
  }
`;