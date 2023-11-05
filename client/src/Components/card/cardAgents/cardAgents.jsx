import React from "react";


const CardAgents = (props) => {
    const {id, name, position} = props

    return(
        <div class="container">
            <div>
                <h1>"Matrícula:"{id}</h1>
                <h1>"Nombre y apellido:"{name}</h1>
                <h1>"Rango:"{position}</h1>
            </div>
        </div>
    );
};

export default CardAgents;