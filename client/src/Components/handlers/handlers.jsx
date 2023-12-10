import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createAgent, createSector } from '../../Redux/actions'


//Handler Formulario Agente
export function CreateAgentHandler () {
    const dispatch = useDispatch();
    async function handleCreateAgent(payload){
        try {
            const newAgent = await dispatch (createAgent(payload)) 
            return newAgent;
        } catch (error) {
            console.error("Error al crear el agente", error)
        }
    }
    return handleCreateAgent
};


//Handler Formulario Sector


export function CreateSectorHandler () {
    const dispatch = useDispatch();
    async function handleCreateSector(payload){
        try {
            const newSector = await dispatch (createSector(payload));
            return newSector;
        } catch (error) {
            console.error("Error al crear el sector", error)
        }
    }
    return handleCreateSector
};

export function useSectorChangeHandler () {
    const [selectedSector, setSelectedSector] = useState("All");

    function handleSectorChange(newSelectedSector) {
        setSelectedSector(newSelectedSector);
    }

    return {
        selectedSector,
        handleSectorChange,
    };
}