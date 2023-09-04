import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ListaDeUsuarios from '../components/ListaDeUsuarios';

function AdminPanel() {
  const [mostrarListaUsuarios, setMostrarListaUsuarios] = useState(false);

  const toggleListaUsuarios = () => {
    setMostrarListaUsuarios(!mostrarListaUsuarios);
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
        </Row>
        <div className='col-12 pt-4'>
          {mostrarListaUsuarios && <ListaDeUsuarios />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
