import React from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const agentId = parseInt(id);
    const agent = useSelector((state) => 
        state.agents.find((agent) => agent.id === agentId)
    );

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
            
    }   

    return (
        <div className="container">
            <div className="row my-3 justify-content-center">
                <div className="col-12 col-md-3">
                    <div className="card">
                        <div className="imageContainer">
                            <img className="card-img-top img-fluid rounded" src={agent.image} alt="agente"/>    
                        </div>
                        <div className="card-body text-center">    
                            <h4>Matrícula: {agent.id}</h4>
                            <h5 className="text-muted">Nombre y apellido: {agent.name}</h5>
                            <h5 className="text-muted">Rango: {agent.position}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col my-3 text-center">
                <Link to="/agents">
                    <button className="btn btn-outline-dark">Volver a agentes</button>
                </Link>
            </div>
        </div>
    )
};

export default Detail;