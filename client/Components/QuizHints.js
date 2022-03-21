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
          <img className='iconSize' src={green}/>
        ) :  generationNumber(guesses.id) < generationNumber(pokemon.id) ? (
          <img className='iconSize' src={upIcon}/>
        ) :
        <img className='iconSize' src={downIcon}/>
      }
{/* Checking if type 1 matches up*/}
      {
        guesses.types[0].type.name === pokemon.types[0].type.name ? (
        <img className='iconSize' src={green}/>
        ): <img className='iconSize' src={red}/>
      }
{/* Checking if type 2 matches */}
      {
        // If both pokemon are dual type, do regular logic. If not, render blue square instead. Blue square means correct pokemon is monotype
        pokemon.types[1] && guesses.types[1] ? (
          guesses.types[1].type.name === pokemon.types[1].type.name ? (
          <img className='iconSize' src={green}/>
         ): <img className='iconSize' src={red}/>
        //  If the guessed pokemon is monotype but the correct pokemon is dual type
        ): guesses.types.length === 1  && pokemon.types.length === 2 ? (
          <img className='iconSize' src={red}/>
        ):
        <img className='iconSize' src={blue}/>
      }
{/* Checking if height matches */}
      {
        toInches(guesses.height) === toInches(pokemon.height) ? (
          <img className='iconSize' src={green}/>
          //If guess height is less than the correct pokemon height
        ): toInches(guesses.height) < toInches(pokemon.height) ? (
          <img className='iconSize' src={upIcon}/>
        ) : <img className='iconSize' src={downIcon}/>
      }
{/* Checking if weight matches */}
      {
        toPounds(guesses.weight) === toPounds(pokemon.weight) ? (
          <img className='iconSize' src={green}/>
        ) : toPounds(guesses.weight) < toPounds(pokemon.weight) ? (
          <img className='iconSize' src={upIcon}/>
        ) : <img className='iconSize' src={downIcon}/>
      }
      <img className='guessPokemonIcon' src={guesses.sprites.front_default} />
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
