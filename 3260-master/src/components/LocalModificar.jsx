import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CargarImagen from '../components/CargarImagen';
import { useUser } from '../UserContext';
import Spinner from 'react-bootstrap/Spinner';
import '../css/localRegistro.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import EspacioDisponible from '../images/EspacioDisponible.jpg';


function esBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}


function LocalModificar() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [imageData1, setImageData1] = useState(null);
  const [imageData2, setImageData2] = useState(null);
  const [imageData3, setImageData3] = useState(null);
  const [imageData4, setImageData4] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const negocioId = '64f77c1a118e1132d090e281';
  const fotos = [];
 


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


  if (data.imagen1 || fotos[1] || imageData1) {
    fotos.push(data.imagen1 || fotos[1] || imageData1);
  } else {fotos.push(EspacioDisponible)}
  
  if (data.imagen2 || fotos[2] || imageData2) {
    fotos.push(data.imagen2 || fotos[2] || imageData2);
  } else {fotos.push(EspacioDisponible)}
  
  if (data.imagen3 || fotos[3] || imageData3) {
    fotos.push(data.imagen3 || fotos[3] || imageData3);
  } else {fotos.push(EspacioDisponible)}
  
  if (data.imagen4 || fotos[4] || imageData4) {
    fotos.push(data.imagen4 || fotos[4] || imageData4);
  }  else {fotos.push(EspacioDisponible)}
 

  console.log(data)

  const handleImageUpload1 = (base64Image) => {
    // Al recibir los datos de la imagen, actualiza la variable de estado
    setImageData1(base64Image);
  };

  const handleBorrarImagen1 = () => {
    // Establece imageData1 en null para borrar la imagen
    setImageData1(null);
    fotos[1] = (EspacioDisponible)
    data.imagen1 = null
  };

  const handleImageUpload2 = (base64Image) => {
    // Al recibir los datos de la imagen, actualiza la variable de estado
    setImageData2(base64Image);
  };
  const handleBorrarImagen2 = () => {
    // Establece imageData1 en null para borrar la imagen
    setImageData2(null)
    fotos[2] = (EspacioDisponible)
    data.imagen2 = null
  };

  const handleImageUpload3 = (base64Image) => {
    // Al recibir los datos de la imagen, actualiza la variable de estado
    setImageData3(base64Image);
  };
  const handleBorrarImagen3 = () => {
    // Establece imageData1 en null para borrar la imagen
    setImageData3(null)
    fotos[3] = (EspacioDisponible)
    data.imagen3 = null
  };

  const handleImageUpload4 = (base64Image) => {
    // Al recibir los datos de la imagen, actualiza la variable de estado
    setImageData4(base64Image);
  };
  const handleBorrarImagen4 = () => {
    // Establece imageData1 en null para borrar la imagen
    setImageData4(null)
    fotos[4] = (EspacioDisponible)
    data.imagen4 = null
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
          "id_Usuario": user.id_Usuario,
          'direccion': domicilio,
        };

        if (imageData1 !== null) {
          nuevosAtributos['imagen1'] = imageData1;
        }
        
        if (imageData2 !== null) {
          nuevosAtributos['imagen2'] = imageData2;
        }
        
        if (imageData3 !== null) {
          nuevosAtributos['imagen3'] = imageData3;
        }
        
        if (imageData4 !== null) {
          nuevosAtributos['imagen4'] = imageData4;
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
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                  <div className='row d-flex p-2'>
                    <div className='col-6 align-items-center justify-content-center'>
                      <p>Imagen 1:</p>
                      <img
                          className="d-block w-100"
                          src={esBase64(fotos[0]) ? `data:image/jpeg;base64,${fotos[0]}` : fotos[0]}
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                          alt='Imagen 1'
                        />
                      <CargarImagen onImageUpload={handleImageUpload1} />
                      <Button variant="danger" onClick={handleBorrarImagen1}>Borrar</Button>
                    </div>
                    <div className='col-6 align-items-center justify-content-center'>
                      <p>Imagen 2:</p>
                      <img
                          className="d-block w-100"
                          src={esBase64(fotos[1]) ? `data:image/jpeg;base64,${fotos[1]}` : fotos[1]}
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                          alt='Imagen 1'
                        />
                      <CargarImagen onImageUpload={handleImageUpload2} />
                      <Button variant="danger" onClick={handleBorrarImagen2}>Borrar</Button>
                    </div>
                  </div>
                  <div className='row d-flex p-2'>
                    <div className='col-6 align-items-center justify-content-center'>
                      <p>Imagen 3:</p>
                      <img
                          className="d-block w-100"
                          src={esBase64(fotos[2]) ? `data:image/jpeg;base64,${fotos[2]}` : fotos[2]}
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                          alt='Imagen 1'
                        />
                      <CargarImagen onImageUpload={handleImageUpload3} />
                      <Button variant="danger" onClick={handleBorrarImagen3}>Borrar</Button>
                    </div>
                    <div className='col-6 align-items-center justify-content-center'>
                      <p>Imagen 4:</p>
                      <img
                          className="d-block w-100"
                          src={esBase64(fotos[3]) ? `data:image/jpeg;base64,${fotos[3]}` : fotos[3]}
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                          alt='Imagen 1'
                        />
                      <CargarImagen onImageUpload={handleImageUpload4} />
                      <Button variant="danger" onClick={handleBorrarImagen4}>Borrar</Button>
                    </div>
                  </div>
                </div>
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