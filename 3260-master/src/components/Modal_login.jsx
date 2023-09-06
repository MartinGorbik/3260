import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IoIosPerson } from 'react-icons/io';
import '../css/modal_login.css';

function Modal_Login() {
  const [show, setShow] = useState(false);
  const { setUser } = useUser();
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const buscarUsuario = (nombreUsuario, contraseña) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.nombre_Usuario === nombreUsuario && usuario.password === contraseña
    );
    return usuarioEncontrado;
  };

  const handleLogin = () => {
    const { usuario, contraseña } = formData;
    const usuarioEncontrado = buscarUsuario(usuario, contraseña);

    if (usuarioEncontrado) {
      setUser(usuarioEncontrado); // Almacena el usuario en el contexto
      console.log('Usuario encontrado:', usuarioEncontrado);
      handleClose();
    } else {
      console.error('Usuario no encontrado');
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch("http://[::1]:3000/usuarios");
      if (response.ok) {
        const listaUsuarios = await response.json();
        setUsuarios(listaUsuarios);
        console.log(listaUsuarios);
      } else {
        console.error('Error al obtener la lista de usuarios');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud al servidor:', error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <IoIosPerson size={40} className="person-icon" />
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
                type="text"
                name="usuario"
                placeholder="Usuario"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="light" onClick={handleLogin}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_Login;
