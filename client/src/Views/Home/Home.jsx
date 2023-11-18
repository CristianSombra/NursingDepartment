import React from "react";
import CardsAgentsContainer from "../../Components/cardsContainer/cardsAgentsContainer/cardsAgentsContainer";
import ScrollTop from "../../Components/scroll-to-top/scrollTop";

// import CardsSectorsContainer from "../../Components/cardsContainer/cardsSectorsContainer/cardsSectorsContainer";
// import img from '../../assets/404.jpg';


const  Home = () => {
    
    return (
        <div className="container align-items-center">
            <div className="row">
                <div className="col">
                    <div className="my-5 text-center">
                        <h2>Todos los agentes</h2>
                    </div>
                        <CardsAgentsContainer/>
                {/* <h2>Aquí están los sectores</h2>
                <CardsSectorsContainer/> */}
                </div>
            </div>
            <ScrollTop/>
        </div>
    );
}


export default Home;





{/* <img src={img} className="img-fluid" alt="404" /> */}