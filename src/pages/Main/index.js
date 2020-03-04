import React, { useState } from 'react';
import socketio from 'socket.io-client';

import Header from './../../layout/HomePage/Header';
import Menu from './../../layout/HomePage/Menu';
import Clientes from './../../layout/HomePage/Clientes';
import Planos from './../../layout/HomePage/Planos';
import Testemunhos from './../../layout/HomePage/Testemunhos';
import Sobre from './../../layout/HomePage/Sobre'; 
import Footer from './../../layout/HomePage/Footer'; 

import { Button } from './../../styles/components';

import Modal from './../../components/Modal';

import { Container, Encomendar, CriarCliente, Login, Compra } from './styles';

export default () => {
  const [modalComida, setModalComida] = useState(false);
  const [modalCompra, setModalCompra] = useState(false);
  const [modalCliente, setModalCliente] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const [plate, setPlate] = useState({});

  const [msg, setMsg] = useState('Vamos aguardar a resposta...');
  const [other, setOther] = useState(false);

  const [plateName, setPlateName] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');

  function encomendarComida (item) {
    setModalComida(true);
    setPlate(item);
  }
  
  function criarCliente() {
    setModalCliente(true)
  }
  
  function handleLogin() {
    setModalLogin(true)
  }

  async function ordering () {
    const socket = socketio('http://localhost:8000');

    socket.emit('ordering', {
      name: plateName,
      number,
      location,
      food: plate.id
    }); 

    setPlateName('');
    setNumber('');
    setLocation('');

    setModalComida(false);
    setModalCompra(true); 

    socket.on('order-accepted', m => {
      setMsg(`Em ${m} o seu prato chegara`)

      setTimeout(() => {
        setOther(true);
      }, 3000);
    });
  }
  
  function handleClose () {
    setPlate({});
    setMsg('Vamos aguardar a resposta...');
    setOther(false);
    setModalCompra(false);
  }

  return (
    <Container>
      <Modal visible={modalComida} closeModal={setModalLogin}>
        <Encomendar BG={plate.img_url}>
          <h1 className="MainTitle"> Emcomenda </h1>
          <div className="main">
            <form action="">
              <input 
                type="text" 
                value={plateName}
                onChange={e => setPlateName(e.target.value)}
                placeholder="Seu nome" 
              />
              <input 
                type="number" 
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Seu numero de telefone" 
                />
              <textarea 
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="Ex: Bloco 2, PR-17, EN-A, AP-001"
              ></textarea>
            </form>
            <div className="item">
              <div className="img"></div>
              <div className="name">{plate.name}</div>
              <div className="price">{plate.price} AKZ</div>
            </div>
            <div className="settings">
              <Button enviar onClick={() => ordering()}>Enviar</Button>
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

      <Modal visible={modalLogin} closeModal={setModalLogin}>
        <Login>
          <h1 className="MainTitle">Login</h1>
          <form onSubmit="">
            <input type="text" placeholder="Seu email" />
            <input type="password" placeholder="Sua Senha" />
          </form>
          <Button enviar >Entrar</Button>
          <Button red onClick={() => setModalLogin(false)}>Cancelar</Button>
        </Login>
      </Modal> 

      <Modal visible={modalCompra}>
        <h1 className="MainTitle">Encomenda Feita</h1>
        <Compra id="compra">
          <h1>{msg}</h1>
          {
            other ? 
              <div id="wait">
                <p>Agora é so aguardar que trazemos o prato</p>
                <Button red onClick={() => handleClose()}>Fechar</Button>
              </div> :
              ''
          }
        </Compra>
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