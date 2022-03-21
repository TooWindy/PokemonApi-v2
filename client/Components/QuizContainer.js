import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import QuizAnswer from "./QuizAnswer";
import { getRandomPokemon } from "../redux/pokemon";
import { guessPokemon, quizPokemon } from "../redux/quiz";

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])
  const guesses = useSelector((state) => state.guesses || [])
  const [answer, setAnswer] = useState(false)
  const [header, setHeader] = useState("Name that pokemon!")
  const [value, setValue] = useState("")
  const [hardMode, setHardMode] = useState(false)

  useEffect(() => {
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
  },[])

  const onChangeHandler= (event) => {
   setValue(event.target.value)
  }
  // Button Functions
  const quitClick = () => {
    history.push("/")
  }

  const hardClick = () => {
    setHardMode(true)
    //dispatch clear guesses
    //dispatch to get a random pokemon (for answer)
    //dispatch to get a quiz pokemon
  }

  const normalClick = () => {
    setHardMode(false)
    //dispatch clear guesses
    //dispatch to get a random pokemon (for answer)
    //dispatch to get a quiz pokemon
  }

  const playAgainClick = () => {
    //dispatch clear guesses
    //dispatch to get a random pokemon (for answer)
    //dispatch to get a quiz pokemon
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(guessPokemon(value))
    event.target.reset()
    //If user guesses correctly
    if(value === pokemon[0].name){
    setAnswer(true)
    setHeader("Correct!")
    }
    //If user surpasses 6 guess, the game ends
    if(guesses.length == 5){
      setAnswer(true)
      setHeader("Game Over!")
    }
  }


  return (
    <div className={"contentContainer"}>
      {/* {console.log(startPokemon)} */}
      <h1 className={"quizTitle"}>{header}</h1>
      {
        !answer ? (
        <form className={'inputContainer'} onSubmit={handleSubmit}>
          <input className={'input-wrapper'} placeholder="Enter Pokemon name here" onChange={onChangeHandler}></input>
          <button className={'submitButton'}>Submit</button>
        </form>
        ) : null
      }

        <div className="pokemon">
          <QuizContent pokemon={pokemon} answer={answer} setAnswer={setAnswer} guesses={guesses} hardMode={hardMode}/>
        </div>
        <div className="answerWrapper">
          <QuizAnswer pokemon={pokemon} guesses={guesses} />
        </div>
        <div className="buttonContainer">
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
        {
          hardMode ? (
            <button className='normalMode'> Normal Mode</button>
          ) : <button className='hardMode'> Hard Mode </button>
        }
        {
          answer ? (
          <button> Play Again!</button>
          ): null
        }
        </div>
      </div>
  )
}

export default QuizContainer
