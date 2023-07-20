import React, { useState } from 'react';
import { IoIosPerson, IoMdSearch } from 'react-icons/io';
import logoImage from '../images/3260-logo.png';
import '../css/header.css';
import { Link } from 'react-router-dom';
import ModalLogin from '../components/Modal_login';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Realiza la lógica de búsqueda utilizando el valor de searchText
    console.log('Realizar búsqueda:', searchText);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/locales">Locales</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/contactos">Contacto</Link></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Busque un Negocio o Evento" value={searchText} onChange={handleInputChange} className="search-input"
          onKeyDown={handleSearch} />
          <IoMdSearch size={40} className="search-icon" onClick={handleSearch} />
        </div>
        <div className="icon-container">
          <ModalLogin/>
        </div>

      </div>
    </header>
  );
};

export default Header;