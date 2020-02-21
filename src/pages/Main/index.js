import React, { useState } from 'react';

import Header from './../../layout/HomePage/Header';
import Menu from './../../layout/HomePage/Menu';
import Clientes from './../../layout/HomePage/Clientes';
import Planos from './../../layout/HomePage/Planos';
import Testemunhos from './../../layout/HomePage/Testemunhos';
import Sobre from './../../layout/HomePage/Sobre'; 
import Footer from './../../layout/HomePage/Footer'; 

import Modal from './../../components/Modal';

import { Container, Encomendar, CriarCliente } from './styles';

export default () => {
  const [modalComida, setModalComida] = useState(false);
  const [modalCliente, setModalCliente] = useState(false);

  function encomendarComida (item) {
    setModalComida(true)
  }

  function criarCliente() {
    setModalCliente(true)
  }

  return (
    <Container>
      <Modal visible={modalComida}>
        <Encomendar>
          <form action="">
            <h1 className="MainTitle"> Emcomenda </h1>
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
            <div className="enviar btn">Enviar</div>
            <div className="cancel btn" onClick={() => setModalComida(false)}>Cancelar</div>
          </div>
        </Encomendar>
      </Modal>

      <Modal visible={modalCliente}>
        <CriarCliente>
          <h1 className="MainTitle"> Cria a sua conta </h1>
          <form action="">
            <input type="text" placeholder="Nome Completo ou da empresa" required/>
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Telefone" required />
            <input type="password" placeholder="Senha" required />
          </form>
          <div className="enviar btn">Enviar</div>
          <div className="cancel btn" onClick={() => setModalCliente(false)}>Cancelar</div>
        </CriarCliente>
      </Modal>

      <Header id="header" criarCliente={criarCliente} />
      <Menu id="menu" encomendar={encomendarComida} />
      <Clientes id="clientes" criarCliente={criarCliente} />
      <Planos id="planos" />
      <Testemunhos id="testemunhos" />
      <Sobre id="sobre" /> 
      <Footer id="footer" /> 
    </Container>
  )
}