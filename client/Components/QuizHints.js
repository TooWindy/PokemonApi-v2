import React from "react";

const QuizHint = (props) => {
  const pokemon = props.pokemon[0]
  const guesses = props.guesses

  const green = '/squares/greenSquare.png'
  const blue = '/squares/blueSquare.png'
  const red = '/squares/redSquare.png'

  if(guesses && pokemon){
  return (
    <div className="answerContainer">
      {console.log( "correct--- " + pokemon.name+ "\n" + "current--- " + guesses.name)}
      <img src={green}/>
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
      <img src={green}/>
      <img src={green}/>
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
