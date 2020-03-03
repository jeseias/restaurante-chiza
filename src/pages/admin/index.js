import React, { useState } from 'react';

import Notificator from './../../layout/admin/Notificator';
import Entrada from './../../layout/admin/Entrada';
import Login from './../../layout/admin/Login';
import Header from './../../layout/admin/Header';

import { Container, Main, MainContent } from './styles';

export default () => {
  const [login, setLogin] = useState(false);
  const [main, setMain] = useState(true);
  
  const [email] = useState('chitunda@chiza.com');
  const [password] = useState('likeaboss');

  function handleLogin({email1, senha}) { 
    if(email1 === email && senha === password) {
      setLogin(false);
      setMain(true);
    } else {
      alert('A senha ou o email esta errado')
    }
  } 

  return (
    <Container>
      <Login visible={login} login={handleLogin}/> 
      <Main visible={main}>
        <Header id="header"/>
        <MainContent> 
          <Notificator id="notificator"/>
          <Entrada id="entrada" />
        </MainContent>
      </Main>
    </Container>
  )
}