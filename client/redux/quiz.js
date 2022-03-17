import axios from "axios";

//Action Types:
const GUESS_POKEMON = "GUESS_POKEMON"
const QUIZ_POKEMON = "QUIZ_POKEMON"

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
//Reducer
const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type){
    case QUIZ_POKEMON:
      return [action.pokemon]
    case GUESS_POKEMON:
      return [...state, action.pokemon];
    default:
      return state
  }
}
