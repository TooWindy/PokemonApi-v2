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

  useEffect(() => {
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
  },[])

  const quitClick = () => {
    history.push("/")
  }

  const onChangeHandler= (event) => {
   setValue(event.target.value)
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
    if(guesses.length == 2){
      setAnswer(true)
      setHeader("Nice Try...")
    }
  }


  return (
    <div className={"contentContainer"}>
      {/* {console.log(startPokemon)} */}
      <h1 className={"title"}>{header}</h1>
      <form className={'inputContainer'} onSubmit={handleSubmit}>
        <input className={'input-wrapper'} placeholder="Enter Pokemon name here" onChange={onChangeHandler}></input>
        <button className={'submitButton'}>Submit</button>
      </form>
        <div className="pokemon">
          <QuizContent pokemon={pokemon} answer={answer} setAnswer={setAnswer}/>
        </div>
        <div className="answerWrapper">
          <QuizAnswer pokemon={pokemon} guesses={guesses} />
        </div>
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
      </div>
  )
}

export default QuizContainer
