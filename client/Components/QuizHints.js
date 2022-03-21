import React from "react";
import { generationNumber } from "./assets/pokedexNumber";

const QuizHint = (props) => {
  const pokemon = props.pokemon[0]
  const guesses = props.guesses

  const green = '/squares/greenSquare.png'
  const blue = '/squares/blueSquare.png'
  const red = '/squares/redSquare.png'
  const upIcon = '/squares/upIcon.png'
  const downIcon = '/squares/downIcon.png'

  const toInches = (num) => {
    return num * 3.937
  }

  const toPounds = (num) => {
    return num * 0.220462
  }

  if(guesses && pokemon){
  return (
    <div className="answerContainer">
      {console.log( "correct--- " + pokemon.name+ "\n" + "current--- " + guesses.name)}
{/* Checking if generation matches */}
      {
        generationNumber(guesses.id) === generationNumber(pokemon.id) ? (
          <img src={green}/>
        ) :  generationNumber(guesses.id) < generationNumber(pokemon.id) ? (
          <img src={upIcon}/>
        ) :
        <img src={downIcon}/>
      }
{/* Checking if type 1 matches up*/}
      {
        guesses.types[0].type.name === pokemon.types[0].type.name ? (
        <img src={green}/>
        ): <img src={red}/>
      }
{/* Checking if type 2 matches */}
      {
        // If both pokemon are dual type, do regular logic. If not, render blue square instead. Blue square means correct pokemon is monotype
        pokemon.types[1] && guesses.types[1] ? (
          guesses.types[1].type.name === pokemon.types[1].type.name ? (
          <img src={green}/>
         ): <img src={red}/>
        //  If the guessed pokemon is monotype but the correct pokemon is dual type
        ): guesses.types.length === 1  && pokemon.types.length === 2 ? (
          <img src={red}/>
        ):
        <img src={blue}/>
      }
{/* Checking if height matches */}
      {
        toInches(guesses.height) === toInches(pokemon.height) ? (
          <img src={green}/>
          //If guess height is less than the correct pokemon height
        ): toInches(guesses.height) < toInches(pokemon.height) ? (
          <img src={upIcon}/>
        ) : <img src={downIcon}/>
      }
{/* Checking if weight matches */}
      {
        toPounds(guesses.weight) === toPounds(pokemon.weight) ? (
          <img src={green}/>
        ) : toPounds(guesses.weight) < toPounds(pokemon.weight) ? (
          <img src={upIcon}/>
        ) : <img src={downIcon}/>
      }
    </div>
  )
  }
  else{
    return (
      <h1>Invalid Pokemon!</h1>
    )
  }
}

export default QuizHint
