import React from 'react';


import  WoodBG from './../../assets/images/bg/wood.jpg';

import { Container } from './styles';

export default () => 
  <Container BG={WoodBG}>
    <h1 className="MainTitle">404, Pagina Não encontrada</h1>
    <p>
      Querido amigo esta pagina, não existe no nosso servidor, vamos voltar para a nossa pagina original
      <br/>
      <a href="/">Inicio</a>
    </p>
  </Container>