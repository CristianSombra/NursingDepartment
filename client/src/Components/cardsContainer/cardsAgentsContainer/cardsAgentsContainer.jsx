import React, { useState, useEffect } from "react";
import CardAgents from '../../card/cardAgents/cardAgents';
import { allAgents } from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const CardsAgentsContainer = () => {
    const agents = useSelector((state) => state.agents);
    const dispatch = useDispatch;

useEffect(()=> {
    dispatch(allAgents())
}, [dispatch]);


return(
    <div class="container">
        <div class="row">
            {agents.map((agent) => (
            <div key={agents.id}>
                <CardAgents
                    key={agent.id}
                    id={agent.id}
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
                    />
            </div>
            ))}
        </div>
    </div>
    )
};


export default CardsAgentsContainer;