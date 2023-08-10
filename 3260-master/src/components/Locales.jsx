import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import '../css/locales.css';
import ExampleCarouselImage1 from '../images/logo_1.png';
import ExampleCarouselImage2 from '../images/logo_2.png';
import ExampleCarouselImage3 from '../images/logo_3.png';

function Locales() {
  return (
    <div className='container mt-4 pb-2 pb-2' id='container'>
        <Row className='text-center'>
        <h4>Comercios</h4>
        </Row>
        <Carousel nextIcon="" nextLabel="" interval={5000}>
            <Carousel.Item>
                <Row xs={1} md={3} className="justify-content-md-center">
                    <Card className="cardLocal">
                        <Card.Img className="cardImage whiteImage" variant="top" src={ExampleCarouselImage1} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Kiosco</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardLocal">
                        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage2} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Comercio de Ropa</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardLocal">
                        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage3} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Insumos para el hogar</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row xs={1} md={3} className="justify-content-md-center">
                    <Card className="cardLocal">
                        <Card.Img className="cardImage whiteImage" variant="top" src={ExampleCarouselImage1} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Zapateria</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardLocal">
                        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage2} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Ferreteria</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardLocal">
                        <Card.Img className="cardImage" variant="top" src={ExampleCarouselImage3} />
                        <Card.Body className='d-flex flex-column'>
                        <Card.Title>Supermercado</Card.Title>
                        <Button variant="link" className='align-self-end'>Ir al sitio</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Carousel.Item>
        </Carousel>
    </div>

  );
}

export default Locales;