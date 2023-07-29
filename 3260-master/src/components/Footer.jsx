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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const usuario = {

      
        "nombre_Usuario": document.getElementById("nombre_Usuario").value,
        "e-mail": document.getElementById("e-mail").value,
        "password": document.getElementById("password").value,
        "clienteId": 0,
        "additionalProp1": {}
    
  
    };


      fetch("http://[::1]:3000/usuarios/", {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
        },
      });


    // Mostrar los datos en la consola
    console.log(usuario);
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
      
      <Modal show={show} onHide={handleClose}>
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
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Ingrese una contraseña"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" id="exampleForm.ControlInput4">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  id="repetircontrasena"
                  name="repetircontrasena"
                  placeholder="Repita su contraseña"
                  autoFocus
                />
              </Form.Group>

          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" id='crear' onClick={handleSubmit}>
            Crear usuario
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  );
};

export default Footer;
