import React from 'react';
import { Link } from 'react-router-dom';

import bg from './../../assets/images/bg/bg.jpg';

import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaBars, FaTwitterSquare  } from 'react-icons/fa';

import { Container, TopHeader, Navagation, HeaderContent, Info, Social } from './styles';

export default () => 
  <Container BG={bg}>
    <TopHeader>
      <Info>
        <div>
          <MdEmail size={20} className='icon' />
          <p>restaurantechiza@outlook.com</p>
        </div>
        <div>
          <MdPhone size={20} className='icon' />
          <p>912516269/923516269</p>
        </div>
        <div>
          <MdLocationOn size={20} className='icon' />
          <p>Entrada do Sequele</p>
        </div>
      </Info>
      <Social>
        <a href="facebook"> <FaFacebookSquare size={20} /> </a>
        <a href="facebook"> <FaInstagram size={20} /> </a>
        <a href="facebook"> <FaLinkedinIn size={20} /> </a>
        <a href="facebook"> <FaTwitterSquare size={20} /> </a>
      </Social>
    </TopHeader>
 
    <Navagation>
      <div>
        <h1>Restaurante Chiza</h1>
      </div>
      <ul>
        <Link to='/#Menu'>Menu</Link>
        <Link to='/#Clientes'>Clientes</Link>
        <Link to='/#Planos'>Planos</Link>
        <Link to='/#Testemunhos'>Testemunhos</Link>
        <Link to='/#Sobre'>Sobre</Link>
        <Link to='/#Contacto'>Contacto</Link>

        <FaBars size={22} className="nav-bar" />
      </ul> 
    </Navagation>
  
    <HeaderContent>
      <div>
        <h1>Recebe-se, e servi-se com amor</h1>
        <div>
          <p>
            Um certamente não pode pensar, <br />
            amar bem, agir bem, <br />
            senão comer bem.
          </p>
          <button>Seje o nosso cliente</button>
        </div>
      </div>
    </HeaderContent>
  </Container>