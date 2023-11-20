import React from "react";
import ScrollTop from "../../Components/scroll-to-top/scrollTop";
import CardsSectorsContainer from "../../Components/cardsContainer/cardsSectorsContainer/cardsSectorsContainer";

const  Sectors = () => {
    
    return (
        <div className="container align-items-center">
            <div className="row">
                <div className="col">
                    <div className="my-5 text-center">
                        <h2>Todos los sectores</h2>
                    </div>
                        <h2>Aquí están los sectores</h2>
                        <CardsSectorsContainer/>
                    </div>
                </div>
            <ScrollTop/>
        </div>
    );
}


export default Sectors;