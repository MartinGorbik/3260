import React, { useState } from 'react';
import PanelSidebar from '../components/PanelSidebar';
<<<<<<< Updated upstream
import TodosLocales from '../components/TodosLocales';
import LocalRegistro from '../components/LocalRegistro';
import { useUser } from '../UserContext';
import { Button } from 'react-bootstrap';

function Test() {
  const { user } = useUser();
  const [mostrarLocalRegistro, setMostrarLocalRegistro] = useState(false); // Estado para controlar la visibilidad de LocalRegistro

  const toggleLocalRegistro = () => {
    setMostrarLocalRegistro(!mostrarLocalRegistro);
  };

  return (
    <div>
      <div className='d-flex '>
        <PanelSidebar />
=======
import { useUser } from '../UserContext';

function Test() {
  const {user} = useUser();
  return (
    <div>
      <div className='d-flex '>
      {user == null
        ? null
        : <PanelSidebar/>}
>>>>>>> Stashed changes
        <div className='d-flex flex-column flex-grow-1'>
          {/* Botón para mostrar/ocultar LocalRegistro */}
          <Button onClick={toggleLocalRegistro}>
            {mostrarLocalRegistro ? 'Ocultar Registro de Local' : 'Abrir panel de Registro de Local'}
          </Button>

          {/* Mostrar LocalRegistro si mostrarLocalRegistro es true */}
          {mostrarLocalRegistro && <LocalRegistro />}
          <TodosLocales idUsuario={user.id_Usuario} />
        
        </div>
      </div>
    </div>
  );
}

export default Test;
