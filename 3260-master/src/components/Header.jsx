import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logoImage from '../images/3260-logo.png';
import '../css/header.css';
import { CiSearch } from "react-icons/ci";
import ModalLogin from '../components/Modal_login';

function NavScrollExample() {
  return (
    <Navbar className='navbar-header' variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/">
          <Image href="#home" src={logoImage} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Locales">Locales</Nav.Link>
            <Nav.Link href="#Eventos">Eventos</Nav.Link>
            <Nav.Link href="#Contactos">Contactos</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Nav.Link href="#Login"><ModalLogin/></Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark"><CiSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;