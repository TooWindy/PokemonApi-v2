import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomPokemon } from "../redux/pokemon";
import RegionButtons from "./RegionButtons";
import { pokedexNumber } from "./assets/pokedexNumber";
import { searchPokemon } from "../redux/pokemon";
import { useHistory } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import pokemonList from "./assets/pokemonList"
import '../Components/assets/typeColors.css'

const Pokemon = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon || [])
  const history = useHistory()
  const [mode, setMode] = useState("")


  useEffect(() => {
    dispatch(getRandomPokemon())
    setMode("lookup")
  },[])

  const quizClick = () => {
    history.push('/quiz')
  }

  return(
    <div className={'contentContainer'}>
      <Autocomplete suggestions={pokemonList} mode ={mode}/>
      {/* A conditional checking if a pokemon is present in the current state.  */}
      {pokemon[0] ? (
      pokemon.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h1 className={'title'}>Current Region: {pokedexNumber(pokemon.id)}</h1>
          <div className="pokemon" >
            <div className={"name"}>
            {pokemon.name}
            </div>
              <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`} target='_blank'>
                <img src={pokemon.sprites.front_default} />
              </a>
            <div className="details">
                <strong>Type:</strong> {pokemon.types.map((type) =>{
                  return <div key={type.slot} className={type.type.name}>
                          {" "}{type.type.name[0].toUpperCase()+type.type.name.slice(1)}{" "}
                        </div>
                  })}
                  <strong>Weight:</strong>{String(pokemon.weight).slice(0,-1)+"."+ String(pokemon.weight).slice(-1)}kg
            </div>
            <div className="details">
              <strong> Ability(s): </strong> {pokemon.abilities.map((ability) => {
                  return <div key={ability.slot}>
                          {ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)}
                        </div>
                  })}
              </div>
          </div>
          </div>
        )
      })
      // If no pokemon exists in the state (misspelt names return null by backend), render this instead
      ) : <div className={'errorContainer'}>
            <div className={'info'}>
              Sorry, that pokemon does not exist!
            </div>
          </div>}
    <RegionButtons/>
    <button className={'playQuiz'} onClick={quizClick}> Play Quiz</button>
    </div>
  )
}

export default Pokemon

