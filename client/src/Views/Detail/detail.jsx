import React from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const agentId = parseInt(id);
    const agent = useSelector((state) => 
        state.agents.find((agent) => agent.id === agentId)
    );

    const sector = agent && agent.Sector;

    if(!agent) {
        return (
            <div className="container">
                <div className="row my-3 d-flex justify-content-center">
                    <div className="col text-center">
                        <p>No se encontró ningún agente</p>
                        <div>
                            <Link to="/agents">
                                <button className="btn btn-outline-dark">Volver a agentes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )    
    };
    
    function formatDate (fecha) {
        const date = new Date(fecha);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="container">
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-4">
                    <img className="img-fluid rounded" src={agent.image} alt="agente"/>    
                </div>
                <div className="col-10 col-md-4 mt-5">
                    <h5><strong>Matrícula: </strong> {agent.id}</h5>
                    <h5><strong>Nombre y apellido: </strong> {agent.name}</h5>
                    <h5><strong>Rango: </strong>{agent.position}</h5>
                    <h5><strong>Género: </strong>{agent.gender}</h5>
                    <h5><strong>Cumpleaños: </strong>{formatDate(agent.birthday)}</h5>
                    <h5><strong>Fecha de admisión: </strong>{formatDate(agent.dateAdmission)}</h5>
                    <h5><strong>Nivel académico: </strong>{agent.academicLevel}</h5>
                    <h5><strong>Estado: </strong>{agent.state}</h5>
                    <h5><strong>Horario: </strong>{agent.time}</h5>
                    <h5><strong>Sector: </strong>{sector ? sector.name : 'No asignado'}</h5>
                </div>
            </div>
            <div className="col my-5 text-center">
                <Link to="/agents">
                    <button className="btn btn-outline-dark">Volver a agentes</button>
                </Link>
            </div>
        </div>
    )
};

export default Detail;