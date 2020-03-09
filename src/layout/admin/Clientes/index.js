import React, { useState, useEffect } from 'react';

import api from './../../../services/api';

import { Container, ClientBox } from './styles';

export default ({ visible, io }) => {
  const [clients, setClients] = useState([]);

  async function loadClient () {
    const data = await api.get('/clients')
    setClients(data.data.clientes);
  } 

  useEffect(() => {
    loadClient();
  }, []);

  io.on('user-new', () => {
    loadClient();
  });

  return (
    <Container visible={visible}>
      <h1>Nossos Proximos Clientes</h1>
      {
        clients.map(client => 
          <ClientBox key={client.id}>
            <p> <b>Nome:</b> {client.name} </p>
            <p> <b>Tipo:</b> {client.type} </p>
            <p> <b>Email:</b> {client.email} </p>
            <p> <b>Mensagen:</b> {client.nota} </p>
          </ClientBox>
        )
      }
    </Container>
  )
}