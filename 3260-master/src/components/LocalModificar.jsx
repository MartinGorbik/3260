import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../css/localRegistro.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CargarImagen from '../components/CargarImagen';



function findEmptyIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      return i; // Retorna el primer índice vacío encontrado
    }
  }
  return -1; // Retorna -1 si no se encuentra ningún índice vacío
} 


function LocalModificar() {
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const negocioId = '64f3a18af5e5601530bf19b7';
 


  useEffect(() => {
    fetch(`http://[::1]:3000/negocios/${negocioId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo obtener el negocio");
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        
      })
      .catch(error => {
        console.error("Error al obtener el negocio:", error);
      });
  }, [negocioId]);



  console.log(data)

  const handleImageUpload = (base64Image) => {
    // Al recibir los datos de la imagen, actualiza la variable de estado
    setImageData(base64Image);
  };



  const handleSubmit = (event) => {
      event.preventDefault();
     
      const calle = document.getElementById('calle').value !== data.direccion.calle ? document.getElementById('calle').value : data.direccion.calle;
      const numero = document.getElementById('numero').value !== data.direccion.numero ? document.getElementById('numero').value : data.direccion.numero;
      const ciudad = document.getElementById('ciudad').value !== data.direccion.ciudad ? document.getElementById('ciudad').value : data.direccion.ciudad;
      const provincia = document.getElementById('provincia').value !== data.direccion.provincia ? document.getElementById('provincia').value : data.direccion.provincia;
      const nombre = document.getElementById('nombre').value !== data.nombre ? document.getElementById('nombre').value : data.nombre;
      const descripcion = document.getElementById('descripcion').value !== data.descripcion ? document.getElementById('descripcion').value : data.descripcion;

      const domicilio = {

            'calle' : calle,
            'numero' : numero,
            'ciudad': ciudad,
            'provincia': provincia,
            "negocioId": "string",
            "clienteId": 0,
            "additionalProp1": {}
        };     
      
      const nuevosAtributos = {
          'nombre' : nombre,      
          'descripcion': descripcion,
          'direccion': domicilio
        };

        const emptyIndex = findEmptyIndex(data.domicilio.additionalProp1.imagenNegocio);
        if (emptyIndex !== -1) {
          // Si se encontró un índice vacío, guarda la imagen allí
          data.domicilio.additionalProp1.imagenNegocio[emptyIndex] = imageData;
        } else {
          // Si no se encontró un índice vacío, muestra un mensaje de error o maneja la situación de otra manera
          console.error('No hay índices vacíos disponibles para guardar la imagen.');
        }


    fetch(`http://[::1]:3000/negocios/${negocioId}`, {
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
          window.alert("Completado Ahora Volver a sus Negocios");
        } 
      })
      .catch(error => {
        window.alert("Completado Ahora Volver a sus Negocios");
      });

  }

  return ( 
    <div className='container d-flex justify-content-center p-4 pt-0'>
      <div className='col-10'>
        <div className='row pt-4' id='titulos'>
            <h1>Modifique su Negocio</h1>
            <br />
            <h5>Ingrese los datos de información de su local. Considere que las demas personas van a poder ubicar su negocio en base a los datos proporcionados</h5>
        </div>
        <br />


        {isLoading ? (
          <div className='d-flex display-content-center'>
            <p>Cargando datos...</p>
              <Spinner animation="grow" />;
              <Spinner animation="grow" />;
              <Spinner animation="grow" />;      
          </div>
      ) : (

        

        <div className='row d-flex align-self-center pt-3 pb-3' id='formulario'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-5 d-flex flex-column align-items-center text-center'>
                        {imageData && (
                          <img
                            src={`data:image/jpeg;base64,${imageData}`}
                            alt="Imagen cargada"
                            style={{ maxWidth: '300px', maxHeight: '300px' }}
                          />
                        )}
                        <div className='d-flex justify-content-center align-items-center'>
                          <Button variant="secondary" className="btn-lg">
                            <CargarImagen onImageUpload={handleImageUpload} />
                          </Button>
                        </div>
                      </div>
                    <div className='col-7'>
                    <div className='pt-2'>
                        <p>Nombre de su Local: </p>
                        <input className='w-100' type="text" name="nombre" value={data.nombre} id="nombre"
                         onChange={(e) => {setData({ ...data, nombre: e.target.value });}} />
                    </div>

                    <div className='pt-5'>
                        <p>Descripción de su Local: </p>
                        <input className='w-100' type="text" name="descripcion" value={data.descripcion}  id="descripcion"
                        onChange={(e) => {setData({ ...data, descripcion: e.target.value });}}   />
                    </div>
                    </div>
                </div>
                   

                <div className='row  p-2'>
                    <p>Calle: </p>
                    <input type="text" name="calle" value={data.direccion.calle} id="calle"
                    onChange={(e) => setData({ ...data, direccion: { ...data.direccion, calle: e.target.value } })} />
                </div>

                <div className='row  p-2'>
                    <p>Número: </p>
                    <input type="text" name="numero" value={data.direccion.numero} id="numero" 
                    onChange={(e) => setData({ ...data, direccion: { ...data.direccion, numero: e.target.value } })}  />
                </div>

                <div className='row  p-2'>
                    <p>Ciudad: </p>
                    <input type="text" name="ciudad" value={data.direccion.ciudad} id="ciudad" 
                    onChange={(e) => setData({ ...data, direccion: { ...data.direccion, ciudad: e.target.value } })}  />
                </div>

                <div className='row  p-2'>
                    <p>Provincia: </p>
                    <input type="text" name="provincia" value={data.direccion.provincia} id="provincia" 
                    onChange={(e) => setData({ ...data, direccion: { ...data.direccion, provincia: e.target.value } })}  />
                </div>

            </form>


            <Row>
                <Col>
                    <div className='pt-4 pb-4'>
                        <Button className='w-100' variant="secondary" id='cancelar' onClick={''}
                        style={{backgroundColor: '#534332d5', height: '45px'}}>
                        Cancelar
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className='pt-4 pb-4'>
                        <Button className='w-100' variant="information" id='registrarNegocio' onClick={handleSubmit}
                        style={{backgroundColor: 'blue', height: '45px', color: 'white'}}>
                        Modificar Datos
                        </Button>
                    </div>
                </Col>
            </Row>
        
        </div>
      )}
      </div>
    </div>
      

    );
}

export default LocalModificar;