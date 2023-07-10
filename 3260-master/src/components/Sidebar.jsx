import React, { useState } from 'react';
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
      <div className="search-container-sidebar">
        <div className="letras">
          <h6>Realice su búsqueda:</h6>
        </div>
        <input
          type="text"
          placeholder="Busque un Negocio o Evento"
          value={searchText}
          onChange={handleInputChange}
          className="search-input-sidebar"
          onKeyDown={handleSearch}
        />
      </div>

      <div className="list-group p-2">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Locales
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Primera opcion que exista
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Segunda opcion que exista
        </button>
      </div>

      <div className="list-group p-2">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Eventos
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Primera opcion que exista
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Segunda opcion que exista
        </button>
      </div>

      <div className="list-group p-2">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Contacto
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Primera opcion que exista
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Segunda opcion que exista
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
