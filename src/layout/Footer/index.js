import React from 'react';

import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaPlaneDeparture, 
  FaAddressBook, FaTwitterSquare  } from 'react-icons/fa';
  import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

import { Container, Top, Bottom } from './styles';

export default () => 
  <Container>
    <Top>
      <div>
        <h2>
          Siga nos
          <FaPlaneDeparture />
        </h2>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaLinkedinIn size={30} />
        <FaTwitterSquare size={30} />
      </div>
      <div>
        <h2>
          Localização
          <MdLocationOn />
        </h2>
      </div>
      <div>
        <h2>
          Contacto
          <FaAddressBook />
        </h2>
        <span>
          <MdEmail size={20} className='icon' />
          <span>restaurantechiza@outlook.com</span>
        </span>
        <span>
          <MdPhone size={20} className='icon' />
          <span>912516269/923516269</span>
        </span>
      </div>
    </Top>
    <Bottom>
      <p>Feito com Amor por <a href="https://jeseiasdomingos.netlify.com">Jeseías Domingos</a> </p>
      <p> Copyright &copy; 2020, Restaurante Chiza, Todos Direito Reservados </p>
      <p>Like A Boss</p>
    </Bottom>
  </Container>