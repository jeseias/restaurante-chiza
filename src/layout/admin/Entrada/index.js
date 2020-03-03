import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import api from './../../../services/api';

import { Container, Encomenda } from './styles';
import { Button } from './../../../styles/components';

export default () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    getOrders();
  }, [])

  useEffect(()=> {
    const socket = socketio('http://localhost:8000');
    socket.on('new-order', () => getOrders(socket)); 
  }, [plates]);

  async function getOrders(socket) {
    const foods = await api.get('http://localhost:8000/orders');
    setPlates(foods.data.data);
  }


  return (
    <Container>
      <h1>Encomendas feitas</h1>  
      {
        plates.map(plate => 
          <Encomenda BG={plate.food.img_url} key={plate._id}>
            <div id="img" /> 
            <b id="name">{plate.food.name}</b>
            <p id="price">{plate.food.price} AkZ</p>
            <p id="location">{plate.location}</p>
            <br/>
            <div id="btns">
              <Button enviar>Aceitar</Button>
              <Button red>Rejeitar</Button>
            </div>
          </Encomenda>
        )
      }  
    </Container>
  )
}