import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/localRegistro.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function LocalModificar() {

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
  
    const negocios = {
      'nombre' : document.getElementById('nombre').value,      
      'descripcion': document.getElementById('descripcion').value,
      'direccion': domicilio
    };

{/*

TENGO QUE VER ESTO PORQUE SOLO HAY QUE MODIFCAR LOS QUE FUERON CAMBIADOS

    const negocioId = 123; // Reemplazar con el ID del negocio que voy a modificar

    const nuevosAtributos = {
      nombre: "Nuevo Nombre de Negocio",
      direccion: "Nueva Dirección",
    };
    
    fetch(`http://[::1]:3000/negocios/${negocioId}`, {
      method: "PUT",
      body: JSON.stringify(nuevosAtributos),
      headers: {
        "Content-Type": "application/json",
      },
    });

*/}

  console.log(negocios)

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
        <div className='row d-flex align-self-center pt-3 pb-3' id='formulario'>
            <form onSubmit={handleSubmit}>

                
                <div className='row'>
                    <div className='col-5'>
                        <div className='d-flex justify-content-center'>                
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwp8_7IxUZpW9j0lrHWr1b7O-nvG_7i45_brca4ur3bvfEWWCK7lguGORFtzU8XFIlDE&usqp=CAU" width="300" height="300" alt="" />                        
                        </div>
                    </div>
                    <div className='col-7'>
                    <div className='pt-2'>
                        <p>Nombre de su Local: </p>
                        <input className='w-100' type="text" name="nombre" id="nombre" placeholder='Inserte el nombre' />
                    </div>

                    <div className='pt-5'>
                        <p>Descripción de su Local: </p>
                        <input className='w-100' type="text" name="descripcion" id="descripcion" placeholder='Inserte una descripción' />
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
      </div>
    </div>
      

    );
}

export default LocalModificar;