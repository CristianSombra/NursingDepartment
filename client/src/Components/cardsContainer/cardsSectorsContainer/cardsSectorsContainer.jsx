import React, { useState, useEffect } from "react";
import CardSectors from '../../card/cardSectors/cardSectors';
import { allSectors } from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const CardsSectorsContainer = () => {
    const sectors = useSelector((state) => state.sectors);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

useEffect(()=> {
    dispatch(allSectors())
}, [dispatch]);

//Calculo los índices de las cards a mostrar en la página
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = sectors.slice(indexOfFirstCard, indexOfLastCard);

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
    <div class="container">
        <div class="row">
            {currentCards.map((sector) => (
            <div key={sector.id} className="col-12 col-md-6">
                <CardSectors
                    key={sector.id}
                    id={sector.id}
                    id_sector={sector.id_sector}
                    image={sector.image}
                    name={sector.name}
                    state={sector.state}
                    />
            </div>
            ))}
        </div>
        <div className='row my-4 justify-content-center'>
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
                disabled={indexOfLastCard >= sectors.length}
                >Siguiente
            </button>
        </div>
        </div>
    </div>
    )
};


export default CardsSectorsContainer;