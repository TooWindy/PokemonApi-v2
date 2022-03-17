import React from "react";

const QuizHint = (props) => {
  const pokemon = props.pokemon[0]
  const guesses = props.guesses



  if(guesses && pokemon){
  return (
    <div className="answerContainer">
      <img src="/correctAnswer.png"/>
      {console.log( "correct--- " + pokemon.name+ "\n" + "current--- " + guesses.name)}
{/* Checking if type 1 matches up*/}
      {
        guesses.types[0].type.name === pokemon.types[0].type.name ? (
        <img src='/correctAnswer.png'/>
        ): <img src='/wrongAnswer.png'/>
      }
      <img src="/correctAnswer.png"/>
      <img src="/correctAnswer.png"/>
      <img src="/correctAnswer.png"/>
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
