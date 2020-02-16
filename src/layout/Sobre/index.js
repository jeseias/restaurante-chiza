import React from 'react';

import { Container, SobreBox, Gallery } from './styles';

export default () => {
  return (
    <Container>
      <SobreBox>
        <h1>Restaurante Chiza</h1>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis totam quod eum vero nulla velit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quod saepe sed esse, consectetur architecto accusamus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius nobis ipsum corrupti non beatae odit?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus in dolorem ab praesentium, quia nostrum vel?
        </p>
        <br/>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam corrupti quis quae adipisci sit voluptatibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non tempore, qui provident ducimus eaque nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum nostrum aspernatur laudantium iste, illo quos!
        </p>
        <br/>
        <br/>
        <p>
          <b>Principios:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laborum repudiandae ipsam.
        </p>
        <br/>
        <p>
          <b>Valores:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laborum repudiandae ipsam.
        </p>
        <br/>
        <p>
          <b>Eticas:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laborum repudiandae ipsam.
        </p>
      </SobreBox>
      <Gallery>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
        <div className="six"></div>
        <div className="seven"></div>
      </Gallery>
    </Container>
  )
}