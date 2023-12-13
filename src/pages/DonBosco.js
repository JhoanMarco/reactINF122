import React from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

const DonBosco = () => {
  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh' }}>
    
    <Container className="mt-3">
      <h1>Don Bosco</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                EN ESTE CASO ESTE ES EL INICIO DE VIDA DE DON BOSCO
              </Card.Text>
              
              <Image src="/images/i1.jpg" fluid className="mx-auto" 
 width="100%" height="200px" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                QUE IMAGENES NESESITA UNO PARA VER QUE FUE EL FUNDADOR DE TODO EL MOVIMIENTO SALECIANO ?
              </Card.Text>
              <Image src="/images/i1.jpg" fluid className="mx-auto" 
 width="100%" height="200px" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </Container>
    </div>
  );
};

export default DonBosco;
