import styled from 'styled-components';

export const Container = styled.section`
  padding: 1rem 5rem;
  position: relative;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const Platebox = styled.div`
  border-radius: .5rem;
  display: grid;
  grid-template-columns: 150px auto auto; 
  grid-template-rows: 50px 40px 40px;
  grid-gap: 1rem;
  grid-template-areas: 
    "img title title"
    "img description description"
    "img price btn";
  margin-bottom: 2rem; 
  
  img {
    grid-area: img;
    border-radius: 100%;
    border: 2px solid #333;
  }

  .title {
    grid-area: title;
    font-weight: bold;
    text-align: right;
  }

  .description {
    grid-area: description;
    text-align: right;
  }

  .price {
    grid-area: price;
    font-weight: bold;
  }

  .btn {
    grid-area: btn;
  }
`;
