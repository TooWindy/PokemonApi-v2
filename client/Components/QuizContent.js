import React, { useState } from "react";

const QuizContent = (props) => {
  const pokemon= props.pokemon[0]
  const guesses = props.guesses
  const hardMode = props.hardMode


  const nameHint = (length) => {
    let string =""
    for(let i=0;i<length;i++){
      string+="_ "
    }
    return string
  }
  //If a correct answer is given, render this
  if(props.answer){
    return (
    <div className={'contentContainer'}>
      {pokemon ? (
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
      {pokemon ? (
       <div>
       {/* {console.log(props.pokemon[0].sprites.front_default)}
       <img src={props.pokemon[0].sprites.front_default} className={'img'}></img> */}
       <div>
         <div className={"name"}>
           {/* If guesses exceed 4, reveal first letter of pokemon + how many letter spaces */}
          {
            guesses.length > 4 && !hardMode ? (
              pokemon.name[0].toUpperCase() +nameHint(pokemon.name.length-1)
            ) : <a>????</a>
          }
         </div>
         <div className="details">
          {/* If guesses exceed 3, reveal the type text colors */}
             <strong>Type:</strong>
             {
               guesses.length > 3 && !hardMode ? (
                  pokemon.types.map((type) =>{
                    return <div key={type.slot} className={type.type.name}>
                       ????
                      </div>
               })
               ) : <a>???</a>
             }
               <strong>Weight:</strong> ???
         </div>
         <div className="details">
           <strong> Ability(s): </strong>
           {/* 4 guesses reveals the correct pokemon's abilities */}
           {
             guesses.length > 2 && !hardMode ? (
               pokemon.abilities.map((ability) => {
               return <div key={ability.slot}>
                       {ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)}
                     </div>
               })
             ) : <a>???</a>
           }

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
