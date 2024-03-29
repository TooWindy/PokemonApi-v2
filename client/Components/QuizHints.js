import React, { useEffect } from "react";
import { generationNumber } from "./assets/pokedexNumber";

const QuizHint = (props) => {
  const pokemon = props.pokemon[0]
  const guesses = props.guesses

  const green = '/squares/greenSquare.png'
  const blue = '/squares/blueSquare.png'
  const red = '/squares/redSquare.png'
  const upIcon = '/squares/upIcon.png'
  const downIcon = '/squares/downIcon.png'
  const fastDown = '/squares/fastDownIcon.png'
  const fastUp = '/squares/fastUpIcon.png'


  useEffect(() => {
    if(pokemon && guesses){
      console.log( "correct--- " + pokemon.name+ "\n" + "current--- " + guesses.name)
      //If the initial guess and the correct pokemon are both the same, reset the game. The check is for if the game state is true or false. If its false (user made no guesses), then reset.
      if(pokemon.name === guesses.name && props.answer === false){
        console.log("Initial guess same as correct pokemon... picking a new pokemon")
        props.initialGuess(props.region)
      }
    }
  },[])

  const toInches = (num) => {
    return num * 39.37
  }

  const toPounds = (num) => {
    return num * 0.220462
  }

  if(guesses && pokemon){
  return (
    <div className="answerContainer">
      {/* {console.log( "correct--- " + pokemon.name+ "\n" + "current--- " + guesses.name)} */}
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
        ):<img className='iconSize' src={red}/>
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
        ): <img className='iconSize' src={blue}/>
      }
{/* Checking if height matches */}
      {
        toInches(guesses.height) === toInches(pokemon.height) ? (
          <img className='iconSize' src={green}/>
          //If guess height is less than the correct pokemon height
        ): null
      }
  {/* Shorter */}
      {
        toInches(guesses.height) > toInches(pokemon.height) ? (
          Math.abs(guesses.height - pokemon.height) < 15 ? (
            <img className='iconSize' src={downIcon}/>
          ): <img className='iconSize' src={fastDown}/>
        ) : null
      }
  {/* Taller */}
      {
        toInches(guesses.height) < toInches(pokemon.height) ? (
          Math.abs(guesses.height - pokemon.height) < 15 ? (
            <img className='iconSize' src={upIcon}/>
          ): <img className='iconSize' src={fastUp}/>
        ) : null
      }
{/* Checking if weight matches */}
      {
        toPounds(guesses.weight) === toPounds(pokemon.weight) ? (
          <img className='iconSize' src={green}/>
        ): null
      }
  {/* Lighter */}
      {
        toPounds(guesses.weight) > toPounds(pokemon.weight) ? (
          // If the difference between the two weights is less than 50lbs
          Math.abs(toPounds(guesses.weight) - toPounds(pokemon.weight)) < 50 ? (
            <img className='iconSize' src={downIcon}/>
            // Anything more than 50 render this instead
          ):  <img className='iconSize' src={fastDown}/>
        ): null
      }
  {/* Heavier */}
      {
        toPounds(guesses.weight) < toPounds(pokemon.weight) ? (
          Math.abs(toPounds(guesses.weight) - toPounds(pokemon.weight)) < 50 ? (
            <img className='iconSize' src={upIcon}/>
          ):  <img className='iconSize' src={fastUp}/>
        ): null
      }
  {/* Guessed Pokemon Sprite */}
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${guesses.name}_(Pok%C3%A9mon)`} target='_blank'>
      <img className='guessPokemonIcon' src={guesses.sprites.front_default} />
      </a>
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
