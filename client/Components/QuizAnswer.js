import React, { useEffect } from "react";
import QuizHints from "./QuizHints";


const QuizAnswer = (props) => {
  const pokemon = props.pokemon
  const guesses = props.guesses

  // useEffect(() => {
  //   if(pokemon && guesses){
  //     if(pokemon[0] === guesses[0]){
  //     props.initialGuess(props.region)
  //   }
  // }
  // },[])

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
        <h3>
          Guess:
        </h3>
      </div>
      {guesses.map((item)=>{
         return (
           <div key={item.id}>
             {/* {console.log(item)} */}
             <QuizHints pokemon={pokemon} guesses={item} initialGuess ={props.initialGuess} region={props.region} answer={props.answer} />
           </div>
         )
      })}

    </div>
  )
}
export default QuizAnswer
