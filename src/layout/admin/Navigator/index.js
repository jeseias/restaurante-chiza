import React from 'react';

import { MdRestaurant } from 'react-icons/md'
import { FaBell, FaUserAstronaut } from 'react-icons/fa'

import { Container } from './styles';

export default ({ handlePages  }) => {
  return(
    <Container>
      <div className="notificator">
        <FaBell size={20}/>
        <span>4</span>
      </div>
      <div id="cliente" onClick={() => handlePages(1)}>
        <FaUserAstronaut size={20}/>
      </div>
      <div id="encomenda" onClick={() => handlePages(2)}>
        <MdRestaurant size={20} />
      </div>
    </Container>
  )
}