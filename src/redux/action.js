import { ToastAndroid } from "react-native";
import { GET_POKEMON_LIST, GET_POKEMON_DETAILS } from "./types";
import { callApi } from "../services/services";
import { STRINGS} from "../utils/strings";

export const GetPokemonList = (url) => (dispatch) => {
    return new Promise((resolve, reject) => {
        callApi(url)
            .then(response => {
                dispatch({
                    type: GET_POKEMON_LIST,
                    payload: response
                })
                return resolve(response);
            }).catch(error => {
                ToastAndroid.show(STRINGS.LIST_FETCH_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
                return reject(error)
            })
    })
}

export const getPokemonDetails = (url) => (dispatch) => {
    return new Promise((resolve, reject) => {
        callApi(url)
            .then(response => {
                dispatch({
                    type: GET_POKEMON_DETAILS,
                    payload: response
                })
                return resolve(response);
            }).catch(error => {
                ToastAndroid.show(STRINGS.LIST_FETCH_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
                return reject(error)
            })
    })
}
