import React from 'react';
import '../css/eventos.css';

const Eventos = () => {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();

    // Array de eventos (simulado para este ejemplo)
    const eventos = [
        { fecha: '2023-08-20', titulo: 'Evento 1', descripcion: 'Un evento el 20 de agosto', banner:'https://acortar.link/KMhWfb'},
        { fecha: '2023-08-25', titulo: 'Evento 2', descripcion:'Un evento el 25 de agosto', banner:'https://acortar.link/76ZhVT'},
        { fecha: '2023-08-03', titulo: 'Evento 3', descripcion: 'Un evento el 03 de agosto', banner:'https://acortar.link/bpkCpa'},
        { fecha: '2023-08-15', titulo: 'Evento 4', descripcion:'Un evento el 15 de agosto', banner:'https://acortar.link/SzXdzy'},
        // ... Agregar más eventos aquí ...
    ];

    //Indica cuántos días hay en el mes
    const obtenerDiasEnMes = (mes, anio) => {
        return new Date(anio, mes + 1, 0).getDate();
    };

    //Indica como parámetros el mes en el que estamos del año actual
    const diasEnMes = obtenerDiasEnMes(mesActual, anioActual);
    
    //Encuentra qué día de la semana empieza el mes
    const primerDiaSemana = new Date(anioActual, mesActual, 1).getDay();

    //Devuelve un array con los días del mes seleccionado
    const diasDelMes = Array.from({ length: primerDiaSemana + diasEnMes }, (_, i) =>
        i >= primerDiaSemana ? i - primerDiaSemana + 1 : ''
    );

    //Convierte de tipo fecha el día y el mes a tipo string
    const fechaISO = (anio, mes, dia) => {
        const mesString = String(mes + 1).padStart(2, '0');
        const diaString = String(dia).padStart(2, '0');
        return `${anio}-${mesString}-${diaString}`;
    };

    //Verifica si hay al menos 1 evento en ese día
    const tieneEvento = (dia) => {
        const fechaDia = fechaISO(anioActual, mesActual, dia);
        return eventos.some((evento) => evento.fecha === fechaDia);
    };

    //Devuelve el objeto de ese evento
    /*const obtenerEventoDia = (dia) => {
        const fechaDia = fechaISO(anioActual, mesActual, dia);
        return eventos.find((evento) => evento.fecha === fechaDia);
    };*/
    
    const semanas = [];
    let semana = [];

    //Armado de las semanas
    diasDelMes.forEach((dia, index) => {
        semana.push(dia);
        if ((index + 1) % 7 === 0 || index === diasDelMes.length - 1) {
        semanas.push(semana);
        semana = [];
        }
    });

    // Función de comparación para ordenar por fecha
    const compararFechas = (eventoA, eventoB) => {
        const fechaA = new Date(eventoA.fecha);
        const fechaB = new Date(eventoB.fecha);
        return fechaA - fechaB;
    };
    
    // Ordenar los eventos por fecha
    eventos.sort(compararFechas);

    return (
        <div>
            <div className="container">
                <h1>Calendario de eventos</h1>
                <table className="table">
                    <thead class="table-light">
                    <tr>
                        <th>Domingo</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {semanas.map((semana, index) => (
                        <tr key={index}>
                        {semana.map((dia, diaIndex) => (
                            <td key={diaIndex} className={tieneEvento(dia) ? 'con-evento' : 'dia-mes'}>
                                <div>
                                    <p id= 'dia'> {dia} </p>
                                </div>
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className='eventos'>
                <h2>Eventos Próximos</h2>
                <div className="grilla-eventos">
                    {eventos.map((evento) => (
                        <div key={evento.fecha}>
                            <div class="card">
                                <img src={evento.banner} class="card-img-top" alt='banner-evento'/>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>{evento.titulo}</strong></h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{evento.fecha}</h6>
                                    <p class="card-text">{evento.descripcion}</p>
                                    <p class="card-link">Info</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


/*{obtenerEventoDia(dia) && (
        <div className='event-div'>
            <strong>{obtenerEventoDia(dia).titulo}</strong>
            <p>{obtenerEventoDia(dia).descripcion}</p>
        </div>
    )}
*/

export default Eventos;