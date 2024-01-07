import React, { useEffect, useState } from "react";
import CardAgents from '../../card/cardAgents/cardAgents';
import { allAgents } from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const CardsAgentsContainer = () => {
    const agents = useSelector((state) => state.agents);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6

useEffect(()=> {
    dispatch(allAgents())
}, [dispatch]);

//Calculo los índices de las cards a mostrar en la página
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = agents.slice(indexOfFirstCard, indexOfLastCard);

   // Función para cambiar a la página anterior
    const goToPreviousPage = (e) => {
        e.preventDefault();
        setCurrentPage((prevPage) => prevPage - 1);
};

  // Función para cambiar a la página siguiente
    const goToNextPage = (e) => {
        e.preventDefault();
        setCurrentPage((prevPage) => prevPage + 1);
};

return(
    <div className="container">
        <div className="row">
            {currentCards.map((agent) => (
            <div key={agent.id} className="col-12 col-md-6">
                <CardAgents
                    key={agent.id}
                    id={agent.id}
                    image={agent.image}
                    name={agent.name}
                    gender={agent.gender}
                    birthday={agent.birthday}
                    email={agent.email}
                    phone={agent.phone}
                    address={agent.address}
                    dateAdmission={agent.dateAdmission}
                    academicLevel={agent.academicLevel}
                    state={agent.state}
                    position={agent.position}
                    time={agent.time}
                    sectorId={agent.sectorId}
                    sector={agent.Sector}
                    />
            </div>
            ))}
        </div>
        <div className='row my-4 d-flex justify-content-center'>
            <div className='col-auto'>
            <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={(e) => goToPreviousPage(e)}
                disabled={currentPage === 1}
                > Anterior
            </button>
            <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={(e) => goToNextPage(e)}
                disabled={indexOfLastCard >= agents.length}
                >Siguiente
            </button>
        </div>
        </div>
    </div>
    )
};


export default CardsAgentsContainer;