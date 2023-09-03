import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../css/locales.css';
//import ExampleCarouselImage1 from '../images/logo_1.png';

function TodosLocales() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://[::1]:3000/negocios")
      .then(response => response.json())
      .then(data => {
        setData(data); 
        console.log(data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de negocios:", error);
      });
  }, []); 

  

  return (
    <div>
      <div className='container mt-4 pb-2 pb-2' id='container'>
      <Row className='text-center'>
      <h4>Todos Los Locales</h4>
      </Row>
      </div>
      <div>
        <Row xs={1} md={3} className="justify-content-md-center">
          {data.map((element, index) => (
            <Card key={index} className="cardLocal">
              <div className="d-flex justify-content-center align-items-center">
                <Card.Img
                  className="cardImage whiteImage"
                  variant="top"
                  src={`data:image/jpeg;base64,${element.imagen1}`}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{element.nombre}</Card.Title>
                <Button variant="link" className="align-self-end">
                  Ir al sitio
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>

    </div>

  );
}

export default TodosLocales;
