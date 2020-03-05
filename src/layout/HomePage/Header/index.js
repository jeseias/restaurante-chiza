import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import bg from './../../../assets/images/bg/bg1.jpg';
 
import { FaBars   } from 'react-icons/fa';

import { Button } from './../../../styles/components';
import { Container, Navagation, HeaderContent } from './styles';

export default ({ criarCliente }) => {
  const [nav, setNav] = useState(false); 

  const hideNav = () => {
    setNav(false);
  }

  useEffect(() => { 
    nav ? 
      document.querySelector('#header ul').classList.add('active') : 
      document.querySelector('#header ul').classList.remove('active') 

    nav ? 
      document.querySelector('#header .nav-bar').classList.add('active') : 
      document.querySelector('#header .nav-bar').classList.remove('active') 

    window.onscroll = () => setNav(false);  
  }, [nav]);

  function navLinks(e) {
    setNav(false)
  }

  return (
    <Container 
      onClick={() => nav ? hideNav() : ''} 
      onScroll={() => nav ? hideNav() : ''} 
      visible={nav} 
      id="header" 
      BG={bg} 
    > 
      <Navagation>
        <div>
          <h1>Restaurante Chiza</h1>
          <FaBars size={30} className="nav-bar" onClick={() => setNav(!nav)} />
        </div>
        <ul onClick={e => navLinks(e)}>
          <Link 
            to='menu'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}> Menu </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            to='clientes'>Clientes</Link>
          <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            to='planos'>Planos</Link>
          <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            to='testemunhos'>Testemunhos</Link>
          <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            to='sobre'>Sobre</Link>
          <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            to='footer'>Contacto</Link>
          {/* <div className="btns">
            {
              false ? 
                <Button enviar >Sair</Button> :
                <Button enviar dbh onClick={() => fazerLogin()}>Entrar</Button>
            }
          </div> */}
        </ul> 
      </Navagation>
    
      <HeaderContent>
        <div>
          <h1>Recebe-se, e servi-se com amor</h1>
          <div>
            <p>
              Sem medo de errar. <br/> 
              Um certamente, <br/> não pode pensar bem, <br />
              amar bem, agir bem, <br />
              senão comer bem.
            </p>
            {/* <Button onClick={() => criarCliente()} enviar>Seje o nosso cliente</Button> */}
            <a href="#clientes" onClick={() => criarCliente()}>Seje o nosso cliente</a>
          </div>
        </div>
      </HeaderContent>
    </Container>
  )
}