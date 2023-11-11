import React from "react";


const CardAgents = (props) => {
    const {image, id, name, position, sector} = props

    return(
        <div class="container">
            <div>
                <img src={image}/>
                <h1>Matrícula: {id}</h1>
                <h1>Nombre y apellido: {name}</h1>
                <h1>Rango: {position}</h1>
                <h1>Sector: {sector.name}</h1>
            </div>
        </div>
    );
};

export default CardAgents;