import React from 'react';

import { FaCar, FaBuilding, FaUserAstronaut } from 'react-icons/fa';

import { Container, ClientCard } from './styles';

export default () => 
  <Container>
    <h1 className="Title"> Seje o nosso client </h1>

    <div>
      <ClientCard>
        <FaCar size={50} className='icon'/>
        <h1>Morista</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
      <ClientCard>
        <FaBuilding size={50} className='icon'/>
        <h1>Morista</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
      <ClientCard>
        <FaUserAstronaut size={50} className='icon'/>
        <h1>Morista</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
    </div>
  </Container>