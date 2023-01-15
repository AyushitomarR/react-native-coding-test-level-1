import { GET_POKEMON_LIST, GET_POKEMON_DETAILS } from "./types";

const initialState = {
    pokemon_list: [],
    pokemon_details: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON_LIST:
            return { ...state, pokemon_list: action.payload };
        case GET_POKEMON_DETAILS:
            return { ...state, pokemon_details: action.payload };
        default:
            return state;
    }
}