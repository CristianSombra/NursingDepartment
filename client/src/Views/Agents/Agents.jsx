import React from "react";
import CardsAgentsContainer from "../../Components/cardsContainer/cardsAgentsContainer/cardsAgentsContainer";
import ScrollTop from "../../Components/scroll-to-top/scrollTop";


const  Agents = () => {
    
    return (
        <div className="container align-items-center">
            <div className="row">
                <div className="col">
                    <div className="my-5 text-center">
                        <h2>Todos los agentes</h2>
                    </div>
                        <CardsAgentsContainer/>
                </div>
            </div>
            <ScrollTop/>
        </div>
    );
}


export default Agents;