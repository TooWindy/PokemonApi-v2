import React from "react";

const QuizAnswer = () => {
  return (
    <div>
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
      <div className="answerContainer">
        <img src="/correctAnswer.png"/>
        <img src="/correctAnswer.png"/>
        <img src="/correctAnswer.png"/>
        <img src="/correctAnswer.png"/>
        <img src="/correctAnswer.png"/>
      </div>
    </div>
  )
}
export default QuizAnswer
