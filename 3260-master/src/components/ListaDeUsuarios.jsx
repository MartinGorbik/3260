import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import '../css/listaDeUsuarios.css'

function ListaDeUsuarios() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);
    const [usuarioAConvertir, setUsuarioAConvertir] = useState(null);
    const [nuevosAtributos, setNuevosAtributos] = useState({});
    const [borrar, setBorrar] = useState(false);
    
          
    
    useEffect(() => {

      if (usuarioAConvertir) {
        
        setNuevosAtributos({
          id_Usuario: usuarioAConvertir.id_Usuario,
          nombre_Usuario: usuarioAConvertir.nombre_Usuario,
          email: usuarioAConvertir.email,
          password: usuarioAConvertir.password,
          admin: true, 
          clienteId: 0,
          additionalProp1: {},
        });
      } else {
        
        setNuevosAtributos({});
      }
    }, [usuarioAConvertir]); 
    




    const confirmarAccion = () => {
        if (!borrar) {
            fetch(`http://[::1]:3000/usuarios/${nuevosAtributos.id_Usuario}`, {
                method: "PUT",
                body: JSON.stringify(nuevosAtributos),
                headers: {
                    "Content-Type": "application/json",
              },
            })

            .then(response => {
                    if (!response.ok) {
                    throw new Error("No se pudo actualizar el negocio");
                    }
                    return response.json();
                })
                .then(data => {
                    if (data) {
                    window.alert("Accion realizada con éxito");
                    } 
                })
                .catch(error => {
                    window.alert("Accion realizada con éxito");
                    window.location.reload();
                });

                    setMostrarModalConfirmacion(false);
                    setUsuarioAConvertir(null);
                }
        else {

            fetch(`http://[::1]:3000/usuarios/${nuevosAtributos.id_Usuario}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("No se pudo eliminar el usuarios");
                  }
                  // Opcionalmente, puedes retornar algún mensaje o indicación de éxito aquí si es necesario
                  return response.json();
                })
                .then((data) => {
                  
                  console.log("Usuario eliminado con éxito");
                  
                })
                .catch((error) => {
                    window.alert("Usuario eliminado con éxito");
                    window.location.reload();
                });
              

                }
            
        }
     
         

      const cancelarAccion = () => {
        setMostrarModalConfirmacion(false);
        setUsuarioAConvertir(null);
      };
      
      


  useEffect(() => {
    fetch("http://[::1]:3000/usuarios")
      .then(response => response.json())
      .then(data => {
        setData(data); 
        setIsLoading(false);
        console.log(data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);

  return (
    <div>

        <h1>Lista de Usuarios</h1>
                {isLoading ? (
          <div className='d-flex display-content-center'>
            <p>Cargando datos...</p>
              <Spinner animation="grow" />;
              <Spinner animation="grow" />;
              <Spinner animation="grow" />;      
          </div>
      ) : (
        <table className="table">
            <thead>
            <tr>
                <th>Nombre de Usuario</th>
                <th>ID de Usuario</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Acción 1</th>
                <th>Acción 2</th>
            </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id_Usuario}>
                        <td>{user.nombre_Usuario}</td>
                        <td>{user.id_Usuario}</td>
                        <td>{user.email}</td>
                        <td>{user.admin ? 'Sí' : 'No'}</td>    
                        <td>
                            <Button
                                className='pl-2'
                                id='admin'
                                variant='success'
                                onClick={() => {
                                    setUsuarioAConvertir(user);
                                    setMostrarModalConfirmacion(true);                                    
                                    }}
                            >
                                Hacer administrador
                            </Button>
                        </td>
                        <td>
                            <Button 
                                className='pl-2' 
                                id='borra'
                                variant='danger'
                                onClick={() => {
                                    setUsuarioAConvertir(user);
                                    setMostrarModalConfirmacion(true);  
                                    setBorrar(true);                                    
                                    }}
                                >                                                               
                                Dar de baja usuario
                            </Button>
                        </td>        
                    </tr>
                ))}
            </tbody>
        </table>    

      )}

        <Modal show={mostrarModalConfirmacion} onHide={cancelarAccion}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar acción</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {borrar ? (
                        <p>¿Estás seguro de que deseas borrar a {usuarioAConvertir?.nombre_Usuario}?</p>                                               
                    ) : (
                        <p>¿Estás seguro de que deseas hacer administrador a {usuarioAConvertir?.nombre_Usuario}?</p>
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

export default ListaDeUsuarios;



