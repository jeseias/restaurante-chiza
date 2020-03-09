import React, { useState, useEffect } from 'react';

import socketio from 'socket.io-client';

import Navigator from './../../layout/admin/Navigator';
import Entrada from './../../layout/admin/Entrada';
import Clientes from './../../layout/admin/Clientes';
import Login from './../../layout/admin/Login';
import Header from './../../layout/admin/Header';

import { Container, Main, MainContent } from './styles';

export default () => {
  const [login, setLogin] = useState(true);
  const [main, setMain] = useState(false);

  const [entrada, setEntrada] = useState(true);
  const [client, setClient] = useState(false);
  
  const [email] = useState('chitunda@chiza.com');
  const [password] = useState('likeaboss');

  const [io, setIo] = useState(null);
  
  function handleLogin({email1, senha}) { 
    const socket = socketio('http://localhost:8000');
    setIo(socket);

    if(email1 === email && senha === password) {
      setLogin(false);
      setMain(true);
    } else {
      setLogin(false);
      setMain(true);
      //alert('A senha ou o email esta errado')
    }
  } 

  function handlePages(e) {
    if(e === 1) {
      setEntrada(false);
      setClient(true);
    } else {
      setEntrada(true);
      setClient(false);
    }
  }

  return (
    <Container>
      <Main visible={main}>
        <Header id="header"/>
        <MainContent> 
          {
            io ? 
              <>
                <Entrada id="entrada" visible={entrada} io={io} />
                <Clientes id="clientes" visible={client} io={io} /> 
              </> : 
              ''
          }
        </MainContent>
        <Navigator handlePages={handlePages}/>
      </Main>
      <Login visible={login} login={handleLogin}/> 
    </Container>
  )
}