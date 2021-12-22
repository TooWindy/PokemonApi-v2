import axios from "axios"

//Action Types:
const GET_RANDOM_POKEMON = "GET_RANDOM_POKEMON"

//Action Creators:
const _getRandomPokemon = (pokemon) => {
  return{
    type: GET_RANDOM_POKEMON,
    pokemon
  }

}
//Thunks
export const getRandomPokemon = () => {
  return async(dispatch) => {
    try{
      const response=  await axios.get('/api/pokemon')
      const responseData = response.data
      dispatch(_getRandomPokemon(responseData))
    }
    catch(err){
      console.log("Couldn't get random pokemon")
    }
  }
}
//Reducer
const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type){
    case GET_RANDOM_POKEMON:
      return [action.pokemon];
    default:
      return state
  }
}

