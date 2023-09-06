import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../css/recommended.css';

function BasicExample() {

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
    <div className='container mt-4 pb-2 pb-2' id='container'>
      <Row className='text-center'>
        <h4>Comercios recomendados</h4>
      </Row>
      <Row xs={1} md={2} className="g-3">
        {data.map((element, index) => (
          element.nombre == "Leon" ? (<Card key={index} className="cardLocal">
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
        </Card>) 
        : null 
        ))}
      </Row>
    </div>

  );
}

export default BasicExample;