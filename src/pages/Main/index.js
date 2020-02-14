import React from 'react';

import Header from './../../layout/Header';
import Menu from './../../layout/Menu';
import Clientes from './../../layout/Clientes';
import Planos from './../../layout/Planos';
import Testemunhos from './../../layout/Testemunhos';

export default () => {
  return (
    <>
      <Header />
      <Menu />
      <Clientes />
      <Planos />
      <Testemunhos />
    </>
  )
}