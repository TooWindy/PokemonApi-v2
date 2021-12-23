import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomPokemon } from "../redux/pokemon";
import RegionButtons from "./RegionButtons";
import { pokedexNumber } from "./assets/pokedexNumber";
import { searchPokemon } from "../redux/pokemon";

const Pokemon = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon || [])
  // const [region, setRegion] = useState("Random")
  const [value, setValue] = useState("")

  useEffect(() => {
    dispatch(getRandomPokemon())
  },[])

  const onChangeHandler= (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(searchPokemon(value))
  }
  return(
    <div className={'contentContainer'}>
      <form className={'inputContainer'} onSubmit={handleSubmit}>
        <input className={'input-wrapper'} placeholder="Enter Pokemon Name Here" onChange={onChangeHandler}></input>
        <button className={'submitButton'}>Submit</button>
      </form>
      {pokemon.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h1 style={{'textAlign': 'center'}}>Current Region: {pokedexNumber(pokemon.id)}</h1>
          <div className="pokemon" >
            <div className={"name"}>
            {pokemon.name}
            </div>
              <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`} target='_blank'>
                <img src={pokemon.sprites.front_default} />
              </a>
            <div className="details">
                <strong>Type:</strong> {pokemon.types.map((type) =>{
                  return <div key={type.slot}>
                          {" "}{type.type.name[0].toUpperCase()+type.type.name.slice(1)}
                        </div>
                  })}
                <strong> Ability(s): </strong> {pokemon.abilities.map((ability) => {
                  return <div key={ability.slot}>
                          {ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)}{" "}
                        </div>
                  })}
            </div>
          </div>
          </div>
        )
      })
      }
    <RegionButtons/>
    </div>
  )
}

{/* <div class="name">{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} />
      <div class="details">
        <ul>
            <strong>Type:</strong> {pokemon.types.map((type) =>{
          return " " + type.type.name[0].toUpperCase() + type.type.name.slice(1)
            })}
        <strong>Ability(s): </strong> {pokemon.abilities.map((ability) => {
          return " "+ ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)
          })}
          </ul>
      </div> */}
export default Pokemon
