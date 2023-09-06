import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CargarImagen from '../components/CargarImagen';
import { useUser } from '../UserContext';
import '../css/localRegistro.css'

function LocalRegistro() {
    const [imageData, setImageData] = useState(null);
    const { user } = useUser();

    const handleImageUpload = (base64Image) => {
        // Al recibir los datos de la imagen, actualiza la variable de estado
        setImageData(base64Image);
        };

  const handleSubmit = (event) => {
      event.preventDefault();
      
      const domicilio = {

            'calle' : document.getElementById('calle').value,
            'numero' : document.getElementById('numero').value,
            'ciudad': document.getElementById('ciudad').value,
            'provincia': document.getElementById('provincia').value,            
            "negocioId": "string",
            "clienteId": 0,
            "additionalProp1": {}
        };     
      
      const negocio = {
          'nombre' : document.getElementById('nombre').value,      
          'descripcion': document.getElementById('descripcion').value,
          'direccion': domicilio,
          "id_Usuario": user.id_Usuario,
          'imagen1' : imageData
        };

        
        fetch("http://[::1]:3000/negocios/", {
            method: "POST",
            body: JSON.stringify(negocio),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("No se pudo crear el negocio");
              }
              return response.json();
            })
            .then((data) => {
              window.alert("Local Creado Correctamente");
              //Aca deberia poner una redireccion hacia los locales probablemente
              //window.location.href = "/otra-seccion";
            })
            .catch((error) => {
              console.error("Error al crear el negocio:", error);            
            });
          
  


  }

  return ( 
    <div className='container d-flex p-4 pt-0'>
      <div className='col-12'>
        <div className='row pt-4' id='titulos'>
            <h1>Registre su Local</h1>
            <br />
            <h5>Ingrese los datos de información de su local. Considere que las demas personas van a poder ubicar su negocio en base a los datos proporcionados</h5>
        </div>
        <br />
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
                        <input className='w-100' type="text" name="nombre" id="nombre" placeholder='Inserte el nombre del Local' />
                    </div>

                    <div className='pt-5'>
                        <p>Descripción de su Local: </p>
                        <input className='w-100' type="text" name="descripcion" id="descripcion" placeholder='Inserte una descripcion para su local'/>
                    </div>
                    </div>
                </div>

                <div className='row  p-2'>
                    <p>Calle: </p>
                    <input type="text" name="calle" id="calle" placeholder='Inserte el nombre de la calle' />
                </div>

                <div className='row  p-2'>
                    <p>Número: </p>
                    <input type="text" name="numero" id="numero" placeholder='Inserte el número' />
                </div>

                <div className='row  p-2'>
                    <p>Ciudad: </p>
                    <input type="text" name="ciudad" id="ciudad" placeholder='Inserte la Ciudad' />
                </div>

                <div className='row  p-2'>
                    <p>Provincia: </p>
                    <input type="text" name="provincia" id="provincia" placeholder='Inserte la Provincia' />
                </div>

            </form>

            <div className='pt-4 pb-4'>
                <Button className='w-100' variant="secondary" id='registrarNegocio' onClick={handleSubmit}
                style={{backgroundColor: '#534332d5', height: '45px'}}>
                Registrar Local
                </Button>
            </div>
        </div>
      </div>
    </div>
      

    );
}

export default LocalRegistro;