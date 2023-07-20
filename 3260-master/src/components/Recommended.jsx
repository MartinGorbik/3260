import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../css/recommended.css';
import ExampleCarouselImage2 from '../images/banner1.jpg';
import ExampleCarouselImage3 from '../images/banner2.jpg';
import ExampleCarouselImage1 from '../images/banner3.jpg';

function BasicExample() {
  return (
    <Row xs={1} md={2} className="g-3">
      <Card className="rainbow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ExampleCarouselImage1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="rainbow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ExampleCarouselImage2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="rainbow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ExampleCarouselImage3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default BasicExample;