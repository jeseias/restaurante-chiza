import React from 'react';

import { Container, PlanoCard } from './styles';

export default () => 
  <Container>
    <h1 className="MainTitle"> Super Planos </h1>
    
    <div>
      <PlanoCard>
        <h1> Diario </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae enim exercitationem reprehenderit esse.
        </p>
        <b>5700 AKZ</b>
      </PlanoCard>
      <PlanoCard>
        <h1> Semanal </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae enim exercitationem reprehenderit esse.
        </p>
        <b>5700 AKZ</b>
      </PlanoCard>
      <PlanoCard>
        <h1> Mensal </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae enim exercitationem reprehenderit esse.
        </p>
        <b>5700 AKZ</b>
      </PlanoCard>
    </div>
  </Container>