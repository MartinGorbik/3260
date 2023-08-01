import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../css/recommended.css';
import ExampleCarouselImage1 from '../images/logo_1.png';
import ExampleCarouselImage2 from '../images/logo_2.png';
import ExampleCarouselImage3 from '../images/logo_3.png';

function BasicExample() {
  return (
    <div className='container mt-4 pb-2 pb-2' id='container'>
      <Row className='text-center'>
        <h4>Comercios recomendados</h4>
      </Row>
      <Row xs={1} md={2} className="g-3">
      <Card>
        <Card.Img className="cardImage whiteImage" variant="top" src={ExampleCarouselImage1} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Advance Co-Working</Card.Title>
          <Button variant="link" className='align-self-end'>Ir al sitio</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage2} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Advance Co-Working</Card.Title>
          <Button variant="link" className='align-self-end'>Ir al sitio</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage3} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Advance Co-Working</Card.Title>
          <Button variant="link" className='align-self-end'>Ir al sitio</Button>
        </Card.Body>
      </Card>

    </Row>
    </div>

  );
}

export default BasicExample;