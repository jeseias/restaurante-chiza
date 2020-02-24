import React, { useState } from 'react';

import Header from './../../layout/HomePage/Header';
import Menu from './../../layout/HomePage/Menu';
import Clientes from './../../layout/HomePage/Clientes';
import Planos from './../../layout/HomePage/Planos';
import Testemunhos from './../../layout/HomePage/Testemunhos';
import Sobre from './../../layout/HomePage/Sobre'; 
import Footer from './../../layout/HomePage/Footer'; 

import { Button } from './../../styles/components';

import Modal from './../../components/Modal';

import { Container, Encomendar, CriarCliente, Login } from './styles';

export default () => {
  const [modalComida, setModalComida] = useState(false);
  const [modalCliente, setModalCliente] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  function encomendarComida (item) {
    setModalComida(true)
  }

  function criarCliente() {
    setModalCliente(true)
  }

  function handleLogin() {
    setModalLogin(true)
  }

  return (
    <Container>
      <Modal visible={modalComida}>
        <Encomendar>
          <h1 className="MainTitle"> Emcomenda </h1>
          <div className="main">
            <form action="">
              <input type="text" placeholder="Seu nome" />
              <input type="number" placeholder="Seu numero de telefone" />
              <textarea placeholder="Ex: Bloco 2, PR-17, EN-A, AP-001"></textarea>
            </form>
            <div className="item">
              <div className="img"></div>
              <div className="name">Arroz com feijao</div>
              <div className="price">1200 AKZ</div>
            </div>
            <div className="settings">
              <Button enviar >Enviar</Button>
              <Button red onClick={() => setModalComida(false)}>Cancelar</Button>
            </div>
          </div>
        </Encomendar>
      </Modal>

      <Modal visible={modalCliente}>
        <CriarCliente>
          <h1 className="MainTitle"> Cria a sua conta </h1>
          <form action="">
            <input type="text" placeholder="Nome Completo ou da empresa" required/>
            <input type="email" placeholder="Seu Email" required />
            <input type="text" placeholder="Empresa ou Individual" required />
            <input type="number" placeholder="Seu Telefone" required />
            <input type="password" placeholder="Sua Senha" required />
          </form>
          <Button enviar >Enviar</Button>
          <Button red onClick={() => setModalCliente(false)}>Cancelar</Button>
        </CriarCliente>
      </Modal>

      <Modal visible={modalLogin}>
        <Login>
          <h1 className="MainTitle">Login</h1>
          <form action="">
            <input type="text" placeholder="Seu email" />
            <input type="password" placeholder="Sua Senha" />
            <Button enviar >Entrar</Button>
            <Button red onClick={() => setModalLogin(false)}>Cancelar</Button>
          </form>
        </Login>
      </Modal>

      <Header id="header" criarCliente={criarCliente} fazerLogin={handleLogin}/>
      <Menu id="menu" encomendar={encomendarComida} />
      <Clientes id="clientes" criarCliente={criarCliente} />
      <Planos id="planos" />
      <Testemunhos id="testemunhos" />
      <Sobre id="sobre" /> 
      <Footer id="footer" /> 
    </Container>
  )
}