import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../css/adminHabilitarLocal.css';

function AdminHabilitarEvento() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);
  const [eventoAConvertir, setEventoAConvertir] = useState(null);
  const [nuevosAtributos, setNuevosAtributos] = useState({});
  const [busqueda, setBusqueda] = useState('');
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

  useEffect(() => {

    if (eventoAConvertir) {
        
        setNuevosAtributos({
            "nombre": eventoAConvertir.nombre,
            "id_Usuario": eventoAConvertir.id_Usuario,
            "descripcion": eventoAConvertir.descripcion,
            "habilitado": true,
            "fecha_Inicio": eventoAConvertir.fecha_Inicio,
            "fecha_Fin": eventoAConvertir.fecha_Fin,
            "hora_Fin":  eventoAConvertir.hora_Fin,
            "hora_Inicio":  eventoAConvertir.hora_Inicio,
            "valorActualXDiaId": "string",
            "clienteId": 0,
            "additionalProp1": {}
          });
      } else {
        
        setNuevosAtributos({});
      }
    }, [eventoAConvertir]); 


  const confirmarAccion = () => {
    fetch(`http://[::1]:3000/eventos/${eventoAConvertir.id_Evento}`, {
      method: "PUT",
      body: JSON.stringify(nuevosAtributos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo actualizar el evento");
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
    setEventoAConvertir(null);
  };

  const cancelarAccion = () => {
    setMostrarModalConfirmacion(false);
    setEventoAConvertir(null);
  };

  useEffect(() => {
    fetch("http://[::1]:3000/eventos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setEventosFiltrados(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de eventos:", error);
      });
  }, []);

  const handleBuscarClick = () => {
    const eventosCoincidentes = data.filter((evento) =>
      evento.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    setEventosFiltrados(busqueda ? eventosCoincidentes : data);
  };

  return (
  
        <div>
          <h1>Lista de Eventos</h1>
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
                  </tr>
                </thead>
                <tbody>
                  {eventosFiltrados.map((evento) => (
                    <tr key={evento.id_Evento}>
                      <td>{evento.nombre}</td>
                      <td>{evento.id_Evento}</td>
                      <td>{evento.habilitado ? 'Sí' : 'No'}</td>
                      <td>
                        <Button
                          className='pl-2'
                          id='habilitar'
                          variant='success'
                          onClick={() => {
                            setEventoAConvertir(evento);
                            setMostrarModalConfirmacion(true);
                          }}
                        >
                          Habilitar
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
              { <p>
                  ¿Estás seguro de que deseas habilitar a{' '}
                  {eventoAConvertir?.nombre}?
                </p>
              }
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

export default AdminHabilitarEvento;
