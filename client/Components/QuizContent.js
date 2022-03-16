import React, { useState } from "react";

const QuizContent = (props) => {
  const pokemon= props.pokemon

  //If a correct answer is given, render this
  if(props.answer){
    return (
    <div className={'contentContainer'}>
      {props.pokemon ? (
        <div>
          {/* {console.log(props.pokemon[0].sprites.front_default)}
          <img src={props.pokemon[0].sprites.front_default} className={'img'}></img> */}
          <div>
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
      ) : <div>
            <div className={'info'}>
             <h1>Loading....</h1>
          </div>
        </div>}
    </div>
  )
//If an no answer or an incorrect answer has been given, render this. The only difference is that the pokemon name is hidden
  }
  else{
    return(
      <div className={'contentContainer'}>
      {props.pokemon ? (
        <div>
          {/* {console.log(props.pokemon[0].sprites.front_default)}
          <img src={props.pokemon[0].sprites.front_default} className={'img'}></img> */}
          <div>
            <div className={"name"}>
            ?????
            </div>
          </div>
        </div>
      ) : <div>
            <div className={'info'}>
             <h1>Loading....</h1>
          </div>
        </div>}
    </div>
    )
  }
}

export default QuizContent

//Pokemon information
{/* <img src={pokemon.sprites.front_default} />
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
                          {ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1) + " "}
                        </div>
                  })}
              </div> */}
