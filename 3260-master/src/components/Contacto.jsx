import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/contacto.css'

function Contacto() {

  const handleSubmit = (event) => {
      event.preventDefault();

      const mensaje = {
          
          nombre : document.getElementById('nombre').value,
          email : document.getElementById('email').value,
          asunto : document.getElementById('asunto').value,
          mensaje: document.getElementById('mensaje').value,
      }

  console.log(mensaje)

  }

  return ( 
    <div className='container d-flex p-4 pt-0'>
      <div className='col-12'>
        <div className='row pt-4' id='titulos'>
            <h1>Contáctenos</h1>
            <br />
            <h5>Para todas las consultas, envíenos un correo electrónico utilizando el siguiente formulario</h5>
        </div>
        <br />
        <div className='row d-flex align-self-center pt-3 pb-3' id='formulario'>
            <form onSubmit={handleSubmit}>

                <div className='row pt-2 d-flex justify-content-space-around'>
                    <div className='col-6 '>
                        <p>Nombre: </p>
                        <input className='w-100' type="text" name="nombre" id="nombre" placeholder='Inserte su nombre' />
                    </div>
                    <div className='col-6 '>
                        <p>Correo electrónico: </p>
                        <input className='w-100' type="text" name="email" id="email" placeholder='Inserte su email'/>
                    </div>
                </div>

                <div className='row  p-2'>
                    <p>Asunto: </p>
                    <input type="text" name="asunto" id="asunto" placeholder='Inserte un asunto' />
                </div>



                <div className='row p-2 search-container'>
                    <p>Mensaje: </p>
                    <input className='auto-resize-input' type="text" name="mensaje" id="mensaje" placeholder='Inserte su mensaje'/>
                </div>
            </form>

            <div className='pt-4 pb-4'>
                <Button className='w-100' variant="secondary" id='crear' onClick={handleSubmit}
                style={{backgroundColor: '#534332d5', height: '45px'}}>
                Enviar Mensaje
                </Button>
            </div>
        </div>
      </div>
    </div>
      

    );
}

export default Contacto;