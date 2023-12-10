import { ERROR, GET_ALL_AGENTS, GET_ALL_SECTORS, CREATE_NEWAGENT, CREATE_NEWSECTOR } from "./actions";

const initialstate = {
    agents: [],
    sectors: [],
    creatingAgent: false,
    createAgentError: null
}

const rootReducer = (state = initialstate, action) => {

    switch(action.type) {
        case ERROR:
            return{
                ...state,
                error: action.payload,
            };
        case GET_ALL_AGENTS:
            return{
                ...state,
                agents: action.payload,
            };
        case GET_ALL_SECTORS:
            return{
                ...state,
                sectors: action.payload,
            };
        case CREATE_NEWAGENT:
            return{
                creatingAgent: false,
                createAgentError: null,
            };
        case CREATE_NEWSECTOR:
            return{
                creatingSector: false,
                createSectorError: null,
            }
        default:
            return state
    };

};


export default rootReducer;