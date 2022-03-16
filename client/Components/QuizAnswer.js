import React from "react";
import QuizHints from "./QuizHints";

const QuizAnswer = (props) => {
  const pokemon = props.pokemon
  // const correctPokemon = props.pokemon[0]

  return (
    <div>
      {/* {console.log(props)} */}
      <div className= 'labelContainer'>
        <h3 className='genAlign'>
          Gen
        </h3>
        <h3 className= 'type1Align'>
          Type 1
        </h3>
        <h3>
          Type 2
        </h3>
        <h3>
          Height
        </h3>
        <h3>
         Weight
        </h3>
      </div>
      {pokemon.map((item)=>{
         return (
           <div key={item.id}>
             <QuizHints pokemon={item} correctPokemon={props.correctPokemon} startPokemon={props.startPokemon} />
           </div>
         )
      })}

    </div>
  )
}
export default QuizAnswer
