import { useDispatch } from 'react-redux'
import { createAgent, createSector } from '../../Redux/actions'


//Handler Formulario Agente
export function CreateAgentHandler () {
    const dispatch = useDispatch();
    async function handleCreateAgent(payload){
        try {
            await dispatch (createAgent(payload))
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
            await dispatch (createSector(payload));
        } catch (error) {
            console.error("Error al crear el sector", error)
        }
    }
    return handleCreateSector
};