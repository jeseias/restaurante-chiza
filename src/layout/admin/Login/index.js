import React, { useState } from 'react';

import { Button } from './../../../styles/components';

import { Container } from './styles';

export default ({ visible, login }) => {
  const [email1, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container visible={visible}>
      <div>
        <h1 className="MainTitle">login</h1>
        <input 
          type="email" 
          value={email1}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"/>
        <input 
          value={senha}
          onChange={e => setSenha(e.target.value)}
          type="password" 
          placeholder="senha"/>
        <Button enviar onClick={() => login({ email1, senha })}>Entrar</Button>
      </div>
    </Container>
  )
}
