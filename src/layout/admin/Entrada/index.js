import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import api from './../../../services/api';

import { Container, Encomenda, Response } from './styles';
import { Button } from './../../../styles/components';

export default () => {
  const [plates, setPlates] = useState([]);
  const [response, setResponse] = useState(false);
  const [time, setTime] = useState('');
  const [io, setIo] = useState({});
  const [ci, setCi] = useState('');

  useEffect(() => {
    getOrders();
  }, [])

  useEffect(()=> {
    const socket = socketio('http://localhost:8000');
    socket.on('new-order', () => getOrders(socket)); 
    setIo(socket); 
  }, [plates]);

  async function getOrders(socket) {
    const foods = await api.get('http://localhost:8000/orders');
    setPlates(foods.data.data); 
  }

  function handleResponse() {
    io.emit('order-accepted', {time, ci});
    setTime('');
    setCi('');
    setResponse(false);
  }

  return (
    <Container>
      <Response visible={response}>
        <h3>Quantos tempo levara </h3>
        <input 
          type="number" 
          value={time}
          onChange={e => setTime(e.target.value)}
          placeholder="Em minutos. Ex 30" />
        <Button 
          enviar 
          onClick={() => handleResponse()}>Enviar</Button> 
      </Response>
      <h1>Encomendas feitas</h1>  
      {
        plates.map(plate => 
          <Encomenda BG={plate.food.img_url} key={plate._id}>
            <div id="img" /> 
            <b id="name">{plate.food.name}</b>
            <p id="price">{plate.food.price} AkZ</p>
            <p id="location">{plate.location}</p>
            <p id="pname">{plate.name}</p>
            <p id="pno">{plate.number}</p>
            <br/>
            <div id="btns">
              <Button 
                enviar 
                onClick={() =>{ 
                  setResponse(true)
                  setCi(plate.userid)
                }}
              >Aceitar</Button>
              <Button red>Rejeitar</Button>
            </div>
          </Encomenda>
        )
      }  
    </Container>
  )
}