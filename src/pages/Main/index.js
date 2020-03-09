import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import api from './../../services/api';

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

  const [io, setIo] = useState({});

  const [msg, setMsg] = useState('Vamos aguardar a resposta...');
  const [other, setOther] = useState(false);

  const [plateName, setPlateName] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');

  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState('individual');
  const [clientEmail, setClientEmail] = useState('');
  const [clientTel, setClientTel] = useState('');
  const [clientNota, setClientNota] = useState('');

  useEffect(() => {
    const socket = socketio('http://localhost:8000');
    setIo(socket);
  }, [])

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

  async function handleCreateClient() {

    if(clientName && clientTel && clientEmail && clientNota) {
      await api.post('/clients', {
        name: clientName,
        type: clientType,
        email: clientEmail,
        telfone: clientTel,
        nota: clientNota
      });

      alert('Seu pedido já foi enviado. Muito em breve entraresmos em contacto consigo');
  
      setModalCliente(false);
  
      setClientName('');
      setClientTel('');
      setClientEmail('');
      setClientNota('');
  
      io.emit('new-user');
    } else {
      alert("Deves providenciar estes campo nome, email, telefone e uma nota");
    }
  }

  async function ordering () {

    if(plateName && location && number) {
      io.emit('ordering', {
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
    } else {
      alert('Seu nome, onde vives, e a sua localizão é obrigatorio');
    }

    io.on('order-accepted', m => {
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
          <h1 className="MainTitle"> Seje nosso cliente </h1>
          <form action="">
            <input 
              type="text" 
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              placeholder="Nome Completo ou da empresa" 
              required/>
            <input 
              type="email" 
              value={clientEmail}
              onChange={e => setClientEmail(e.target.value)}
              placeholder="Seu Email" />
            <input 
              type="number" 
              value={clientTel}
              onChange={e => setClientTel(e.target.value)}
              placeholder="Seu telefone" />
            <select
              value={clientType}
              onChange={e => setClientType(e.target.value)}
            >
              <option value="individual">individual</option>
              <option value="empresa">empresa</option>
              <option value="motorista" >motorista</option>
            </select>
            <textarea 
              value={clientNota}
              onChange={e => setClientNota(e.target.value)}
            ></textarea>
          </form>
          <Button enviar onClick={() => handleCreateClient()}>Enviar</Button>
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

      <Header criarCliente={criarCliente} fazerLogin={handleLogin}/>
      <Menu encomendar={encomendarComida} />
      <Clientes criarCliente={criarCliente} />
      <Planos />
      <Testemunhos />
      <Sobre /> 
      <Footer /> 
    </Container>
  )
}