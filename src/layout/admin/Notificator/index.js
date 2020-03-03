import React from 'react';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <h1> Notificações </h1>
      <p>
        <b>Encomendas Pendentis: <span id="red">15</span> </b>
      </p>
      <p>
        <b>Encomendas já feitas: <span>12</span> </b>
      </p>
    </Container>
  )
}