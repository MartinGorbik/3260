import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Contactos from '../pages/Contactos';
//import '../css/sidebar.css'

const Sidebar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Realiza la lógica de búsqueda utilizando el valor de searchText
    console.log('Realizar búsqueda:', searchText);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
      <div className="sidebar-content">
        <div className="list-group p-2">
          <button type="button" className="list-group-item list-group-item-action">
            <Link to="/mislocales">Mis locales</Link>
          </button>
          <button type="button" className="list-group-item list-group-item-action">
            <Link to="/mislocales">Mis eventos</Link>
          </button>
          <button type="button" className="list-group-item list-group-item-action">
            <Link to="/mislocales">Todos</Link>
          </button>
        </div>

        <div className="list-group p-2">
          <button type="button" className="list-group-item list-group-item-action">
            Mi cuenta
          </button>
        </div>

        <div className="list-group p-2">
          <button type="button" className="list-group-item list-group-item-action">
          <Link to="/contactos">Contacto</Link>
          </button>
        </div>
      </div>
  );
};

export default Sidebar;
