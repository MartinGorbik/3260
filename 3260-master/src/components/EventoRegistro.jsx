import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/EventoRegistro.css'

function EventoRegistro() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const evento = {
            "nombre": document.getElementById("nombre").value,
            "id_Usuario": "string",
            "descripcion": document.getElementById("descripcion").value,
            "fecha_Inicio": document.getElementById("fecha_Inicio").value,
            "fecha_Fin": document.getElementById("fecha_Fin").value,
            "hora_Fin": document.getElementById("hora_Fin").value,
            "hora_Inicio": document.getElementById("hora_Inicio").value,
            "valorActualXDiaId": "string",
            "clienteId": 0,
            "additionalProp1": {}
        }

        console.log(evento);

        fetch("http://[::1]:3000/eventos/", {
            method: "POST",
            body: JSON.stringify(evento),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("No se pudo crear el evento");
              }
              return response.json();
            })
            .then((data) => {
              window.alert("Evento creado correctamente");
              window.location.href = './eventos';
            })
            .catch((error) => {
              console.error("Error al crear el evento:", error);            
            });
    };


    return ( 
        <div className='container d-flex p-4 pt-0'>
          <div className='col-12'>
            <div className='row pt-4' id='titulos'>
                <h1>Registre su Evento</h1>
                <br />
                <h5>Ingrese los datos de su evento. Considere que las demas personas van a poder participar en base a los datos proporcionados</h5>
            </div>
            <br />
            <div className='row d-flex align-self-center col-10 pt-3 pb-3' id='formulario'>
                <form onSubmit={handleSubmit}>  
                    
                    <div className='row p-2'>
                        <p>Nombre de su Evento: </p>
                        <input className='w-100' type="text" name="nombre" id="nombre" placeholder='Indique el titulo de su evento' />
                    </div>

                    <div className='row p-2'>
                        <p>Descripción del evento: </p>
                        <input className='w-100' type="text" name="descripcion" id="descripcion" placeholder='Agregue una descripción de su evento'/>
                    </div>
                    
                    <div className='row p-2'>
                        <p>Fecha de inicio: </p>
                        <input type="text" name="fecha_Inicio" id="fecha_Inicio" placeholder='Inserte Año-Mes-Dia' />
                    </div>

                    <div className='row p-2'>
                        <p>Fecha de finalización: </p>
                        <input type="text" name="fecha_Fin" id="fecha_Fin" placeholder='Inserte Año-Mes-Dia' />
                    </div>

                    <div className='row p-2'>
                        <p>Horario de inicio: </p>
                        <input type="text" name="hora_Inicio" id="hora_Inicio" placeholder='Inserte Hs:Min' />
                    </div>

                    <div className='row p-2'>
                        <p>Horario de finalización: </p>
                        <input type="text" name="hora_Fin" id="hora_Fin" placeholder='Inserte Hs:Min' />
                    </div>    
                </form>
    
                <div className='pt-4 pb-4'>
                    <Button className='w-100' variant="secondary" id='registrarNegocio' onClick={handleSubmit}
                    style={{backgroundColor: '#534332d5', height: '45px'}}>
                    Registrar Evento
                    </Button>
                </div>
            </div>
          </div>
        </div>          
    
    );
}

export default EventoRegistro;
