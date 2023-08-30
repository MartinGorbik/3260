import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/localRegistro.css'

function LocalRegistro() {

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

        fetch("http://[::1]:3000/negocios/", {
            method: "POST",
            body: JSON.stringify(negocios),
            headers: {
              "Content-Type": "application/json",
            },
          });

  console.log(negocios)


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

                <div className='row pt-2'>
                    <div>
                        <p>Nombre de su Local: </p>
                        <input className='w-100' type="text" name="nombre" id="nombre" placeholder='Inserte el nombre' />
                    </div>
                </div>

                <div className='row pt-2'>
                    <div>
                        <p>Descripción de su Local: </p>
                        <input className='w-100' type="text" name="descripcion" id="descripcion" placeholder='Inserte una descripción' />
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