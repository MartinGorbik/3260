import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MiCarousel from './MiCarousel';
import '../css/localInfo.css'


function NegocioInfo() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const negocioId = '64f77c1a118e1132d090e281';
  const fotos = [];



  useEffect(() => {
    fetch(`http://[::1]:3000/negocios/${negocioId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo obtener el negocio");
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener el negocio:", error);
      });
  }, [negocioId]);



  if (data.imagen1) {
    fotos.push(data.imagen1);
  }
  
  if (data.imagen2) {
    fotos.push(data.imagen2);
  }
  
  if (data.imagen3) {
    fotos.push(data.imagen3);
  }
  
  if (data.imagen4) {
    fotos.push(data.imagen4);
  }
  
  

  return (
    <div className="contenedor col-6 mt-5 mx-auto">
      {isLoading ? (
        <p>Cargando datos...</p>
      ) : (

        <div className='d-flex justify-content-center'>
            <div className='col-10'>
                <div className='marcoPrincipal'>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <Card className='w-100 text-center'>
                                <Card.Body>
                                    <h1>{data.nombre}</h1>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <Card className='w-100 h-100 align-items-center justify-content-center'>
                                <MiCarousel fotos={fotos} />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <Card className='w-100 text-center' >
                                <Card.Body>
                                    <h4><strong>Calle:</strong> {data.direccion.calle}    </h4>
                                    <h4><strong>Número:</strong> {data.direccion.numero}    </h4>
                                    <h4><strong>Provincia:</strong> {data.direccion.provincia}    </h4>
                                    <h4><strong>Ciudad:</strong> {data.direccion.ciudad}    </h4>
                                    <h4><strong>Descripción:</strong> {data.descripcion}    </h4>
                                </Card.Body>
                            </Card>
                            </Col>
                    </Row>
                </div>
            </div>
        </div>
        


      )}
    </div>
  );
}

export default NegocioInfo;
