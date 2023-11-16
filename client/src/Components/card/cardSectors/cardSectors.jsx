import React from "react";


const CardSectors = (props) => {
    const { name, state} = props

    return(
        <div class="container">
            <div>
                <h1>Sector: {name}</h1>
                <h1>{state}</h1>
            </div>
        </div>
    );
};

export default CardSectors;