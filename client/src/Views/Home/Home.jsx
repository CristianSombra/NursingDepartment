import CardsAgentsContainer from "../../Components/cardsContainer/cardsAgentsContainer/cardsAgentsContainer";
import CardsSectorsContainer from "../../Components/cardsContainer/cardsSectorsContainer/cardsSectorsContainer";

const  Home = () => {
    return (
        <div class="container">
            <h1>Ésta es la view de Home</h1>
            <h2>Aquí están los agentes</h2>
            <CardsAgentsContainer/>
            <h2>Aquí están los sectores</h2>
            <CardsSectorsContainer/>
        </div>
    )
}


export default Home;