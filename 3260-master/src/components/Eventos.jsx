import React, { useState, useEffect } from 'react';
import '../css/eventos.css';

const Eventos = () => {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();

    const fechaHoy = fechaActual.toISOString();
    const [eventos, setEventos] = useState([]);
        
    useEffect(() => {
        fetch("http://[::1]:3000/eventos")
          .then((response) => response.json())
          .then((data) => {
            setEventos(data);
          })
          .catch((error) => {
            console.error('Error al obtener eventos desde el backend:', error);
          });
    }, []);
    
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
        return eventos.some((evento) => evento.fecha_Inicio === fechaDia);
    };

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
        const fechaA = new Date(eventoA.fecha_Inicio);
        const fechaB = new Date(eventoB.fecha_Inicio);
        return fechaA - fechaB;
    };
    
    const eventosPorFecha = eventos.reduce((agrupados, evento) => {
        const fecha = evento.fecha_Inicio;
        if (!agrupados[fecha]) {
          agrupados[fecha] = [];
        }
        agrupados[fecha].push(evento);
        return agrupados;
    }, {});

    // Ordenar los eventos por fecha
    const eventos_ord = eventos.sort(compararFechas);
    const eventosFiltrados = eventos_ord.filter((evento) => evento.fecha_Inicio >= fechaHoy);

    return (
        <div>
            <div className="container">
                <h1>Calendario de eventos</h1>
                <table className="table">
                    <thead className="table-light">
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
                                    <p id="dia">{dia}</p>
                                    {eventosPorFecha[fechaISO(anioActual, mesActual, dia)] && (
                                    <div className='event-div'>
                                        {eventosPorFecha[fechaISO(anioActual, mesActual, dia)].map((evento) => (
                                        <div key={evento._id}>
                                            <strong>{evento.nombre}</strong>
                                        </div>
                                        ))}
                                    </div>
                                    )}
                                </div>
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='eventos'>
                <h2>Próximos eventos en la ciudad</h2>
                <div className="grilla-eventos">
                    {eventosFiltrados.map((evento) => (
                        <div key={evento._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>{evento.nombre}</strong></h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{evento.fecha_Inicio} a las {evento.hora_Inicio}hs</h6>
                                    <p className="card-text">{evento.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Eventos;