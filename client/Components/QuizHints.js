import React from "react";

const QuizHint = (props) => {
  let pokemon = props.pokemon
  const startPokemon = props.startPokemon
  const correctPokemon = props.correctPokemon


  if(startPokemon){
  return (
    <div className="answerContainer">
      <img src="/correctAnswer.png"/>
      {/* {console.log(props)} */}
{/* Checking if type 1 matches up*/}
      {
        correctPokemon.types[0].type.name === pokemon.types[0].type.name ? (
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
      <h1>Start Guessing! {console.log(props)}</h1>
    )
  }
}

export default QuizHint
