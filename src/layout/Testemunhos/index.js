import React  from 'react';

import SeaVideo from './../../assets/videos/dark-sea.mp4';
import Me1 from './../../assets/images/testmunhos/me1.jpg';
import Me2 from './../../assets/images/testmunhos/me2.jpg';
import Me3 from './../../assets/images/testmunhos/me3.jpg';

import {} from 'react-icons';

import { Container, TestimonialBox, ClientBox } from './styles';

export default () => 
  <Container id="testemunhos" BG={SeaVideo}> 
    <video src={SeaVideo} autoPlay loop /> 
    <h1 className="MainTitle">O que nossos clientes dizem</h1>

    <TestimonialBox>
      <ClientBox bg={Me1}>
        <div>
          <div className="img" />
          <p className="name">Jeseías Domingos</p>
          <b>Guitarrista</b>
          <h1>"</h1>
          <p className="saying">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla facilis repudiandae!
          </p>
        </div>
      </ClientBox>
      <ClientBox bg={Me3}>
        <div>
          <div className="img" />
          <p className="name">Jeseías Domingos</p>
          <b>Guitarrista</b>
          <h1>"</h1>
          <p className="saying">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla facilis repudiandae!
          </p>
        </div>
      </ClientBox>
      <ClientBox bg={Me2}>
        <div>
          <div className="img" />
          <p className="name">Jeseías Domingos</p>
          <b>Guitarrista</b>
          <h1>"</h1>
          <p className="saying">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla facilis repudiandae!
          </p>
        </div>
      </ClientBox>
      <ClientBox bg={Me3}>
        <div>
          <div className="img" />
          <p className="name">Jeseías Domingos</p>
          <b>Guitarrista</b>
          <h1>"</h1>
          <p className="saying">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla facilis repudiandae!
          </p>
        </div>
      </ClientBox>
    </TestimonialBox>
  </Container> 