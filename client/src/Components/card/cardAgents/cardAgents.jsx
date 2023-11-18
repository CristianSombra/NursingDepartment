import React from "react";
import './cardAgent.css';

const CardAgents = (props) => {
    const {image, id, name, position, sector} = props


    return(
        <div class="container">
            <div class="row my-3 justify-content-center">
                <div class="col">
                    <div class="card">
                        <div class="imageContainer">
                            <img class="card-img-top img-fluid rounded" src={image} alt="agente"/>    
                        </div>
                        <div class="card-body text-center">    
                            <h4>Matrícula: {id}</h4>
                            <h5 class="text-muted">Nombre y apellido: {name}</h5>
                            <h5 class="text-muted">Rango: {position}</h5>
                            <h5 class="text-muted">Sector: {sector.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardAgents;