import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; // Importa Col de Bootstrap
import ListaDeUsuarios from '../components/ListaDeUsuarios';
import AdminHabilitarLocal from './AdminHabilitarLocal';
import AdminHabilitarEvento from './AdminHabilitarEvento'; 

function AdminPanel() {
  const [mostrarListaUsuarios, setMostrarListaUsuarios] = useState(false);
  const [mostrarListaNegocios, setmostrarListaNegocios] = useState(false);
  const [mostrarListaEventos, setmostrarListaEventos] = useState(false);

  const toggleListaUsuarios = () => {
    setMostrarListaUsuarios(!mostrarListaUsuarios);
    setmostrarListaNegocios(false);
    setmostrarListaEventos(false);
  };

  const toggleListaNegocios = () => {
    setmostrarListaNegocios(!mostrarListaNegocios);
    setMostrarListaUsuarios(false);
    setmostrarListaEventos(false);
  };

  const toggleListaEventos = () => {
    setmostrarListaEventos(!mostrarListaEventos);
    setMostrarListaUsuarios(false);
    setmostrarListaNegocios(false);
  };
  
  return (
    <div className='col-12 d-flex justify-content-center align-items-center'>
      <div>
        <Row>
          <div className='text-center w-100'>
            <h1>Bienvenido al Panel de Administradores</h1>
            <h3 className='text-center'>Seleccione una opción:</h3>
          </div>
        </Row>
        <Row>
          <Col xs={4}> 
            <div className='mx-auto d-flex justify-content-center pt-4'>
              <Button
                className='pl-2'
                variant='primary'
                id='listaUsuarios'
                onClick={toggleListaUsuarios}
              >
                Cargar lista de usuarios
              </Button>
            </div>
          </Col>
          <Col xs={4}> 
            <div className='mx-auto d-flex justify-content-center pt-4'>
              <Button
                className='pl-2'
                variant='secondary'
                onClick={toggleListaNegocios}
              >
                Habilitar Local
              </Button>
            </div>
          </Col>
          <Col xs={4}> 
            <div className='mx-auto d-flex justify-content-center pt-4'>
              <Button
                className='pl-2'
                variant='secondary'
                onClick={toggleListaEventos}
              >
                Habilitar Evento
              </Button>
            </div>
          </Col>
        </Row>
        <div className='col-12 pt-4'>
          {mostrarListaUsuarios && <ListaDeUsuarios />}
          {mostrarListaNegocios && <AdminHabilitarLocal />}
          {mostrarListaEventos && <AdminHabilitarEvento />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
