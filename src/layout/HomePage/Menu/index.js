import React, { useEffect, useState } from 'react';

import api from './../../../services/api'; 


import { Button } from './../../../styles/components';
import { Container, Platebox } from './styles';

export default ({ encomendar }) => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function LoadPlates() {
      const pratos = await api.get('/foods');
      setPlates(pratos.data.data);
    }
    LoadPlates()
  }, [])

  return (
    <Container>
      <h1 className="MainTitle">As Delicias de Hoje</h1>
      <div>
        {
          plates.map( plate => 
            <Platebox key={plate._id} BG={plate.img_url}>
              <div className="img"></div>
              <div className="title SecondaryTitle">{plate.name}</div>
              <p className="description">{plate.description}</p>
              <p className="price">{plate.price} AKZ</p>
              <Button default onClick={() => encomendar(plate)}>Encomendar</Button>
            </Platebox>
          )
        }
      </div>
    </Container>
  )
}