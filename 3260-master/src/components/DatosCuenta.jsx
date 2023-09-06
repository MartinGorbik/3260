import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import '../css/listaDeUsuarios.css';
import { useUser } from '../UserContext';
import Form from 'react-bootstrap/Form';

function ListaDeUsuarios() {
    const { user } = useUser();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function contrasenasCoinciden (contrasena, copiaContrasena){
        if (contrasena === copiaContrasena) 
          return true;
    }

    function esContrasenaAceptable(contrasena) {
        // Verificar si la contraseña tiene al menos 8 caracteres
        if (contrasena.length < 8) {
          return false;
        }
      
        // Verificar si la contraseña contiene al menos una letra mayúscula
        if (!/[A-Z]/.test(contrasena)) {
          return false;
        }
      
        // Verificar si la contraseña contiene al menos un número
        if (!/\d/.test(contrasena)) {
          return false;
        }
      
        // Si la contraseña pasa todas las verificaciones, es aceptable
        return true;
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
            
        fetch(`http://[::1]:3000/usuarios/${user.id_Usuario}`)
        .then(response => response.json())
        .then(data => {
            setData(data); 
            setIsLoading(false);
            console.log(data);
        })
        .catch(error => {
            console.error("Error al obtener la lista de usuarios:", error);
        });     
      };

    return (
        <div className='row d-flex align-self-center pt-3 pb-3' id='formulario'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre_Usuario"
                  name="usuario"
                  placeholder ={user.nombre_Usuario}
                  autoFocus
                  onChange={(e) => {setData({ ...data, nombre_Usuario: e.target.value });}}
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="e-mail"
                  name="email"
                  placeholder ={user.email}
                  autoFocus
                  onChange={(e) => {setData({ ...data, email: e.target.value });}}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" id="exampleForm.ControlInput3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput4">
                <Form.Label>Nueva Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Ingrese su nueva contraseña"
                  required
                  autoFocus
                  onChange={(e) => {setData({ ...data, password: e.target.value });}}
                />
              </Form.Group> */}
          </Form>
          <Modal.Footer>
          <Button variant="light" id='modificar' onClick={handleSubmit}>
            Modificar usuario
          </Button>
        </Modal.Footer>
    </div>
      
    );
  }
  
  export default ListaDeUsuarios;