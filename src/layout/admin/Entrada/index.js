import React, { useEffect, useState } from 'react';

import api from './../../../services/api';

import { Container, Encomenda, Response, JaFeito } from './styles';
import { Button } from './../../../styles/components';

export default ({ visible, io }) => {
  const [plates, setPlates] = useState([]);
  const [response, setResponse] = useState(false);
  const [time, setTime] = useState('');
  const [ci, setCi] = useState('');
  const [cp, setCp] = useState();

  useEffect(() => {
    getOrders();
  }, [io])

  useEffect(()=> {
    io.on('new-order', () => getOrders(io)); 
  }, [io]);
    
  async function getOrders() {
    const foods = await api.get('/orders');
    setPlates(foods.data.data); 
  }

  async function handleResponse() {
    io.emit('order-accepted', {time, ci, cp}); 

    setTime('');
    setCi('');
    setResponse(false);

    getOrders();
  }

  async function handleDeleteOrder(id) {
    io.emit('delete-order', {id});
    getOrders();
  }

  return (
    <Container visible={visible}>
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
      {
        plates.map(plate => (
          !plate.state ? 
          <Encomenda BG={plate.food.img_url} key={plate._id} className="MainElements">
              <h1>Encomendas Recebidas</h1>  
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
                    setCp(plate._id)
                  }}
                >Aceitar</Button>
                <Button red>Rejeitar</Button>
              </div>
            </Encomenda> :
            <JaFeito className="MainElements" BG={plate.food.img_url} >
              <h1>Encomendas Vistas</h1> 
              <div id="img" /> 
              <b id="name">{plate.food.name}</b>
              <p id="price">{plate.food.price} AkZ</p>
              <p id="location">{plate.location}</p>
              <p id="pname">{plate.name}</p>
              <p id="pno">{plate.number}</p>
              <br/>
              <div id="btns">
                <Button red onClick={() => {
                  handleDeleteOrder(plate._id)
                }}>Eliminar</Button>
              </div>
            </JaFeito>
        ))
      }  
    </Container>
  )
}