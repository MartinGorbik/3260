import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IoIosPerson} from 'react-icons/io';
import '../css/modal_login.css';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
      <IoIosPerson size={40} className="person-icon"/>
      </Button>
      <Modal className="modal-login" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="user"
                placeholder="Usuario"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="light" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;