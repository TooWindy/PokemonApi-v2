import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../redux/pokemon";

const Pokemon = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon || [])

  useEffect(() => {
    dispatch(getRandomPokemon())
  },[])

  return(
    <div>
      {console.log(pokemon)}
      {pokemon.map((pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id}>
            <div className={"name"}>
              {pokemon.name}
            </div>
            <img src={pokemon.sprites.front_default} />
            <div className="details">
              <strong>Type:</strong> {pokemon.types.map((type) =>{
                return <div key={type.slot}>
                          {" " + type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                        </div>
                })}
              <strong>Ability(s): </strong> {pokemon.abilities.map((ability) => {
                return <div key={ability.slot}>
                        {" " + ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}
                      </div>
                })}
           </div>
          </div>
        )
      })
      }
      {/* <button onClick={() => dispatch(getRandomPokemon())}>click here</button> */}
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
