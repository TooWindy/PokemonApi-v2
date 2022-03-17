import axios from "axios"

//Action Types:
const GET_POKEMON = "GET_POKEMON"
const SEARCH_POKEMON = "SEARCH_POKEMON"

//Action Creators:
const _getPokemon = (pokemon) => {
  return{
    type: GET_POKEMON,
    pokemon
  }
}

const _searchPokemon = (pokemon) => {
  return {
    type:SEARCH_POKEMON,
    pokemon
  }
}

// const _getKantoPokemon=(pokemon) => {
//   return {
//     type: GET_KANTO_POKEMON,
//     pokemon
//   }
// }
//Thunks

export const getRandomPokemon = () => {
  return async(dispatch) => {
    try{
      const response=  await axios.get('/api/pokemon')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get random pokemon")
    }
  }
}

export const searchPokemon = (pokemon) => {
  return async(dispatch) => {
    try{
      const response = await axios.post('/api/pokemon/search', {pokemon} )
      const responseData = response.data
      dispatch(_searchPokemon(responseData))
    }
    catch(err){
      console.log("Search Failed")
    }
  }
}

export const getKantoPokemon = () => {
  return async(dispatch) => {
    try{
      const response=  await axios.get('/api/pokemon/kanto')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Kanto pokemon")
    }
  }
}

export const getJohtoPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/johto')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Johto pokemon")
    }
  }
}

export const getHoennPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/hoenn')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Hoenn pokemon")
    }
  }
}

export const getSinnohPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/sinnoh')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Sinnoh pokemon")
    }
  }
}

export const getUnovaPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/unova')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Unova pokemon")
    }
  }
}

export const getKalosPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/kalos')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Kalos pokemon")
    }
  }
}

export const getAlolaPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/alola')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Alola pokemon")
    }
  }
}

export const getGalarPokemon = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/pokemon/galar')
      const responseData = response.data
      dispatch(_getPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get Galar pokemon")
    }
  }
}

//Reducer
const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type){
    case GET_POKEMON:
      return [action.pokemon];
    case SEARCH_POKEMON:
      return [action.pokemon];
    default:
      return state
  }
}

