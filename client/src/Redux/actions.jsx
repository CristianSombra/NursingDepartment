import axios from "axios";

export const ERROR = 'ERROR';
export const GET_ALL_AGENTS = 'GET_ALL_AGENTS';
export const GET_ALL_SECTORS = 'GET_ALL_SECTORS';


export const allAgents = () => {
    return async function(dispatch) {
        let errorMessage = '';

        try {
            const apiData = axios.get('http://localhost:3001/agents');
            const agents = apiData.apiData
            dispatch({type:GET_ALL_AGENTS, payload: agents})
        } catch (error) {
            errorMessage='Error al cargar a los agentes'
            dispatch({type:ERROR, payload:errorMessage})
        }
        return errorMessage;
    };
};

export const allSectors = () => {
    return async function(dispatch) {
        let errorMessage = '';
        try {
            const apiData = axios.get('http://localhost:3001/sector')
            const sectors = apiData.data
            dispatch({type: GET_ALL_SECTORS, payload: sectors})
        } catch (error) {
            errorMessage='Error al cargar los sectores'
            dispatch({type:ERROR, payload:errorMessage})
        }
        return errorMessage;
    };
};