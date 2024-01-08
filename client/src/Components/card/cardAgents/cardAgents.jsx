import React from "react";
import { Link } from "react-router-dom";
import './cardAgent.css';

const CardAgents = (props) => {
    const {image, id, name, position, sector} = props


    return(
        <div className="container">
            <div className="row my-3 justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="imageContainer">
                            <img className="card-img-top img-fluid rounded" src={image} alt="agente"/>    
                        </div>
                        <div className="card-body text-center">
                            <h5 className="text-muted">Nombre y apellido: {name}</h5>
                            <h5 className="text-muted">Rango: {position}</h5>
                            <h5 className="text-muted">Sector: {sector.name}</h5>
                        </div>
                        <div className="mb-3 text-center">
                            <Link to={`/agents/${id}`}>
                                <button className="btn btn-dark">Ver Agente</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardAgents;