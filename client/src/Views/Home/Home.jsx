import CardsAgentsContainer from "../../Components/cardsContainer/cardsAgentsContainer/cardsAgentsContainer";
// import CardsSectorsContainer from "../../Components/cardsContainer/cardsSectorsContainer/cardsSectorsContainer";
// import img from '../../assets/404.jpg';

const  Home = () => {
    return (
        <div className="container">
                <h1>Ésta es la view de Home</h1>
                <h2>Aquí están los agentes</h2>
            
            
            <div className="row">
                <div className="col">
                <CardsAgentsContainer/>
                {/* <h2>Aquí están los sectores</h2>
                <CardsSectorsContainer/> */}
                </div>
            </div>
        </div>
    );
}


export default Home;



{/* <img src={img} className="img-fluid" alt="404" /> */}