import { GET_ALL_AGENTS, GET_ALL_SECTORS } from "./actions";

const initialstate = {
    agents: [],
    sectors: [],
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
        default:
            return state
    };

};


export default rootReducer;