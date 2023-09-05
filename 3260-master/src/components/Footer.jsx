import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';

const Footer = () => {
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

    const contrasena = document.getElementById('password').value;
    const copiaContrasena = document.getElementById('repetircontrasena').value;

    if (esContrasenaAceptable(contrasena)) {      
      if (contrasenasCoinciden (contrasena, copiaContrasena)) {
                
        const usuario = {     
          "nombre_Usuario": document.getElementById("nombre_Usuario").value,
          "email": document.getElementById("e-mail").value,
          "password": document.getElementById("password").value,
          "admin": false,
          "clienteId": 0,
          "additionalProp1": {}    
          };
  
        
        fetch("http://[::1]:3000/usuarios/", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
                      
            window.alert("Usuario creado con éxito");
            window.location.reload();
          })
          .catch((error) => {
              window.alert("Usuario creado con éxito");
              window.location.reload();
          })        

      } else {
        // La contraseña no cumple con los requisitos
        alert('La contraseñas no coinciden');
      }
      
    } else {
      // La contraseña no cumple con los requisitos
      alert('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');
    }
 

  };

  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row" id='footer-fila-1'>
          <div className="col d-flex justify-content-center align-items-center">
            <h3>"Su negocio merece ser conocido"</h3>
            <div className='d-flex p-4'>
                <Button type='button' className='btn' id='registro' onClick={handleShow}>
                Regístrese
                </Button>
            </div>
          </div>
        </div> 
        <div className="row" id='footer-fila-2'>
          <div className="col text-center">
            <h6>© 2023 Copyright</h6>
          </div>
        </div>
      </div>
      
      <Modal className="modal-registro" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Cree un Usuario</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre_Usuario"
                  name="usuario"
                  placeholder="Ingrese un Usuario"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="e-mail"
                  name="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese una contraseña"
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput4">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="repetircontrasena"
                  name="repetircontrasena"
                  placeholder="Repita su contraseña"
                  required
                  autoFocus
                />
              </Form.Group>

          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="light" id='crear' onClick={handleSubmit}>
            Crear usuario
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  );
};

export default Footer;
