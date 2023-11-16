import React, { useState, useEffect } from "react";
import CardSectors from '../../card/cardSectors/cardSectors';
import { allSectors } from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const CardsSectorsContainer = () => {
    const sectors = useSelector((state) => state.sectors);
    const dispatch = useDispatch();

useEffect(()=> {
    dispatch(allSectors())
}, [dispatch]);


return(
    <div class="container">
        <div class="row">
            {sectors?.map((sector) => (
            <div key={sector.id}>
                <CardSectors
                    key={sector.id}
                    id={sector.id}
                    id_sector={sector.id_sector}
                    name={sector.name}
                    state={sector.state}
                    />
            </div>
            ))}
        </div>
    </div>
    )
};


export default CardsSectorsContainer;