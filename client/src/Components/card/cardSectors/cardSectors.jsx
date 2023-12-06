import React from "react";


const CardSectors = (props) => {
    const { image, name, state} = props

    return(
        <div className="container">
            <div className="row my-3 justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="imageContainer">
                            <img className="card-img-top img-fluid rounded" src={image} alt="agente"/>    
                        </div>
                    <div className="card-body text-center">
                            <h4>Sector: {name}</h4>
                            <h4 className="text-muted">{state}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSectors;