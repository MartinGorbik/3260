import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../css/adminHabilitarLocal.css';

function AdminHabilitarLocal() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);
  const [negocioAConvertir, setNegocioAConvertir] = useState(null);
  const [nuevosAtributos, setNuevosAtributos] = useState({});
  const [premium, setPremium] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [negociosFiltrados, setNegociosFiltrados] = useState([]);

  useEffect(() => {
    if (negocioAConvertir) {
      const domicilio = {
        calle: negocioAConvertir.calle,
        numero: negocioAConvertir.numero,
        ciudad: negocioAConvertir.ciudad,
        provincia: negocioAConvertir.provincia,
        negocioId: "string",
        clienteId: 0,
        additionalProp1: {},
      };

      setNuevosAtributos({
        nombre: negocioAConvertir.nombre,
        descripcion: negocioAConvertir.descripcion,
        id_Usuario: negocioAConvertir.id_Usuario,
        direccion: domicilio,
        imagen1: negocioAConvertir.imagen1,
        imagen2: negocioAConvertir.imagen2,
        imagen3: negocioAConvertir.imagen3,
        imagen4: negocioAConvertir.imagen4,
        premium: premium,
        habilitado: true,
      });
    } else {
      setNuevosAtributos({});
    }
  }, [negocioAConvertir, premium]);

  const confirmarAccion = () => {
    fetch(`http://[::1]:3000/negocios/${negocioAConvertir.id_Negocio}`, {
      method: "PUT",
      body: JSON.stringify(nuevosAtributos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo actualizar el negocio");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          window.alert("Acción realizada con éxito");
        }
      })
      .catch((error) => {
        window.alert("Acción realizada con éxito");
        window.location.reload();
      });

    setMostrarModalConfirmacion(false);
    setNegocioAConvertir(null);
  };

  const cancelarAccion = () => {
    setMostrarModalConfirmacion(false);
    setNegocioAConvertir(null);
  };

  useEffect(() => {
    fetch("http://[::1]:3000/negocios")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setNegociosFiltrados(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de negocios:", error);
      });
  }, []);

  const handleBuscarClick = () => {
    const negociosCoincidentes = data.filter((negocio) =>
      negocio.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    setNegociosFiltrados(busqueda ? negociosCoincidentes : data);
  };

  return (
  
        <div>
          <h1>Lista de Negocios</h1>
          {isLoading ? (
            <div className='d-flex display-content-center'>
              <p>Cargando datos...</p>
              <Spinner animation='grow' />
              <Spinner animation='grow' />
              <Spinner animation='grow' />
            </div>
          ) : (
            <div>
              <div className='col-12 d-flex'>
                <div className='d-flex col-6 align-items-center justify-content-center pb-4'>
                  <p>Ingrese el nombre:</p>
                </div>
                <div className='d-flex col-6 align-items-center justify-content-center pb-4'>
                  <input
                    type='text'
                    id='busqueda'
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  <button id='buscar' onClick={handleBuscarClick}>
                    Buscar
                  </button>
                </div>
              </div>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>ID</th>
                    <th>Habilitado</th>
                    <th>Acción 1</th>
                    <th>Acción 2</th>
                  </tr>
                </thead>
                <tbody>
                  {negociosFiltrados.map((negocio) => (
                    <tr key={negocio.id_Negocio}>
                      <td>{negocio.nombre}</td>
                      <td>{negocio.id_Negocio}</td>
                      <td>{negocio.habilitado ? 'Sí' : 'No'}</td>
                      <td>
                        <Button
                          className='pl-2'
                          id='habilitar'
                          variant='success'
                          onClick={() => {
                            setNegocioAConvertir(negocio);
                            setPremium(false);
                            setMostrarModalConfirmacion(true);
                          }}
                        >
                          Habilitar
                        </Button>
                      </td>
                      <td>
                        <Button
                          className='pl-2'
                          id='premium'
                          variant='danger'
                          onClick={() => {
                            setNegocioAConvertir(negocio);
                            setPremium(true);
                            setMostrarModalConfirmacion(true);
                          }}
                        >
                          Premium
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <Modal show={mostrarModalConfirmacion} onHide={cancelarAccion}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar acción</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {premium ? (
                <p>
                  ¿Estás seguro de que deseas convertir a{' '}
                  {negocioAConvertir?.nombre} en Premium?
                </p>
              ) : (
                <p>
                  ¿Estás seguro de que deseas habilitar a{' '}
                  {negocioAConvertir?.nombre}?
                </p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={cancelarAccion}>
                Cancelar
              </Button>
              <Button variant='primary' onClick={confirmarAccion}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
  );
}

export default AdminHabilitarLocal;
