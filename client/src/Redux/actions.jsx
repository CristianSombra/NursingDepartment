import axios from "axios";

export const ERROR = 'ERROR';
export const GET_ALL_AGENTS = 'GET_ALL_AGENTS';
export const GET_ALL_SECTORS = 'GET_ALL_SECTORS';
export const CREATE_NEWSECTOR = 'CREATE_NEWSECTOR';
export const CREATE_NEWAGENT = 'CREATE_NEWAGENT'


//SECCIÓN AGENTE
export const allAgents = () => {
    return async function(dispatch) {
        let errorMessage = '';

        try {
            const response = await axios.get('http://localhost:3001/agents');
            const agents = response.data
            console.log('Estos son los agentes:', agents)
            dispatch({type:GET_ALL_AGENTS, payload: agents})
        } catch (error) {
            errorMessage='Error al cargar a los agentes'
            dispatch({type:ERROR, payload:errorMessage})
        }
        return errorMessage;
    };
};

export const createAgent = (payload) => {
    return async function(dispatch) {
        let errorMessage = '';
        try {
            await axios.post('http://localhost:3001/agents/newagent', payload)
            dispatch({type: CREATE_NEWAGENT })
        } catch (error) {
            const errorMessage = 'Error al crear el Agente'
            dispatch({type: ERROR, payload: errorMessage})
        }
        return errorMessage;
    }
}


//SECCIÓN SECTOR
export const allSectors = () => {
    return async function(dispatch) {
        let errorMessage = '';
        try {
            const response = await axios.get('http://localhost:3001/sector')
            const sectors = response.data
            dispatch({type: GET_ALL_SECTORS, payload: sectors})
        } catch (error) {
            errorMessage='Error al cargar los sectores'
            dispatch({type:ERROR, payload:errorMessage})
        }
        return errorMessage;
    };
};

export const createSector = (payload) => {
    return async function(dispatch) {
        let errorMessage = '';
        try {
            await axios.post('http://localhost:3001/sector/newsector', payload)
            dispatch({type: CREATE_NEWSECTOR })
        } catch (error) {
            const errorMessage = 'Error al crear el sector'
            dispatch({type: ERROR, payload: errorMessage})
        }
        return errorMessage;
    }
}