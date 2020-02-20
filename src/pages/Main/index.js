import React, { useState } from 'react';

import Header from './../../layout/Header';
import Menu from './../../layout/Menu';
import Clientes from './../../layout/Clientes';
import Planos from './../../layout/Planos';
import Testemunhos from './../../layout/Testemunhos';
import Sobre from './../../layout/Sobre'; 
import Footer from './../../layout/Footer'; 

import Modal from './../../components/Modal';

import { Container, Encomendar, CriarCliente } from './styles';

export default () => {
  const [modalComida, setModalComida] = useState(false);
  const [modalCliente, setModalCliente] = useState(false);

  function encomendarComida (item) {
    setModalComida(true)
  }

  function criarCliente() {

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
            <div className="enviar">Enviar</div>
            <div className="cancel" onClick={() => setModalComida(false)}>Cancelar</div>
          </div>
        </Encomendar>
      </Modal>

      <Modal visible={true}>
        
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