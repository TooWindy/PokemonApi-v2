import axios from "axios";

//Action Types:
const GUESS_POKEMON = "GUESS_POKEMON"
const QUIZ_POKEMON = "QUIZ_POKEMON"
const CLEAR_POKEMON = "CLEAR_POKEMON"

//Action Creators:

const _guessPokemon = (pokemon) => {
  return {
    type: GUESS_POKEMON,
    pokemon
  }
}

const _getQuizPokemon = (pokemon) => {
  return {
    type: QUIZ_POKEMON,
    pokemon
  }
}

export const clearPokemon = () => {
  return {
    type: CLEAR_POKEMON
  }
}
//Thunk

export const guessPokemon = (pokemon) => {
  return async(dispatch) => {
    try {
      const response = await axios.post('/api/pokemon/search', {pokemon} )
      const responseData = response.data
      //Only send something back if the data isn't undefined
      if(response.data) {
        dispatch(_guessPokemon(responseData))
      }
      else{
        console.log("Invalid Pokemon")
      }
    }
    catch(err){
      console.log("Guess Failed")
    }
  }
}

export const quizPokemon = () => {
  return async(dispatch) => {
    try {
      const response=  await axios.get('/api/pokemon')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Failed to get quiz pokemon")
    }
  }
}

export const getKantoQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response=  await axios.get('/api/pokemon/kanto')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Kanto pokemon")
    }
  }
}

export const getJohtoQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/johto')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Johto pokemon")
    }
  }
}

export const getHoennQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/hoenn')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Hoenn pokemon")
    }
  }
}

export const getSinnohQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/sinnoh')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Sinnoh pokemon")
    }
  }
}

export const getUnovaQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/unova')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Unova pokemon")
    }
  }
}

export const getKalosQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/kalos')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Kalos pokemon")
    }
  }
}

export const getAlolaQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/alola')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Alola pokemon")
    }
  }
}

export const getGalarQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/galar')
      const responseData = response.data
      dispatch(_getQuizPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Galar pokemon")
    }
  }
}

export const getPaldeanQuizPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/paldean');
      const responseData = response.data;
      dispatch(_getQuizPokemon(responseData));
    }
    catch(err){
      console.log("Couldn't get Paldean pokemon");
    }
  }
}
//Reducer
const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type){
    case QUIZ_POKEMON:
      return [action.pokemon]
    case GUESS_POKEMON:
      return [...state, action.pokemon];
    case CLEAR_POKEMON:
      return [];
    default:
      return state
  }
}
