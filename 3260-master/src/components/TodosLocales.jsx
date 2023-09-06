import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../css/locales.css';

import LocalModificar from './LocalModificar';
import LocalInfo from './LocalInfo'; // Importa el componente LocalInfo

function TodosLocales({ idUsuario }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIdNegocio, setSelectedIdNegocio] = useState(null);
  const [selectedIdNegocioInfo, setSelectedIdNegocioInfo] = useState(null); // Estado para el id_Negocio seleccionado para LocalInfo

  useEffect(() => {
    let apiUrl = "http://[::1]:3000/negocios";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de negocios:", error);
      });
  }, []);

  useEffect(() => {
    if (idUsuario) {
      const filtered = data.filter(element => element.id_Usuario === idUsuario);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, idUsuario]);

  const handleIrAlSitioClick = (idNegocio) => {
    setSelectedIdNegocio(idNegocio);
  };

  // Función para manejar el clic en el botón "Ver Info"
  const handleVerInfoClick = (idNegocio) => {
    setSelectedIdNegocioInfo(idNegocio);
  };

  return (
    <div>
      <div className='container mt-4 pb-2 pb-2' id='container'>
        <Row className='text-center'>
          <h4>Todos Los Locales</h4>
        </Row>
      </div>
      <div>
        <Row xs={1} md={3} className="justify-content-md-center">
          {filteredData.map((element, index) => (
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
                <Button variant="link" className="align-self-end" onClick={() => handleIrAlSitioClick(element.id_Negocio)}>
                  Modificar Local
                </Button>
                {/* Botón "Ver Info" para abrir LocalInfo */}
                <Button variant="link" className="align-self-end" onClick={() => handleVerInfoClick(element.id_Negocio)}>
                  Ver Info
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
      {/* Mostrar el componente LocalModificar si selectedIdNegocio tiene un valor */}
      {selectedIdNegocio && <LocalModificar idNegocio={selectedIdNegocio} />}

      {/* Mostrar el componente LocalInfo si selectedIdNegocioInfo tiene un valor */}
      {selectedIdNegocioInfo && <LocalInfo idNegocio={selectedIdNegocioInfo} />}
    </div>
  );
}

export default TodosLocales;
