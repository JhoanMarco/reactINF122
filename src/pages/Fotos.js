import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
const Fotos = () => {
  return    (
    <div style={{ backgroundColor: 'green', minHeight: '100vh' }}>
       <Container className="mt-3">
      <h1>CARRUSEL DE IMAGENES</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.app.goo.gl/hTQU8D57jABdKoiKA"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
            <p>Descripción de la primera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.app.goo.gl/6XpppNbEKjYtVEGs5"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
            <p>Descripción de la segunda imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Puedes agregar más imágenes aquí */}
      </Carousel>
    </Container>
      </div>
      )
};

export default Fotos;
