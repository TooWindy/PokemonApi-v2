import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../redux/pokemon";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import QuizAnswer from "./QuizAnswer";
import { guessPokemon } from "../redux/pokemon";

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])
  const [answer, setAnswer] = useState(false)
  const [value, setValue] = useState("")

  const correctPokemon = pokemon[0]
  let startPokemon = null

  useEffect(() => {
    dispatch(getRandomPokemon())
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

  }
  return (
    <div className={"contentContainer"}>
      {/* {console.log(startPokemon)} */}
      {answer ? (
        <h1 className={"title"}>Correct!</h1>
        ) :
        <h1 className={"title"}>Name that pokemon! </h1>
        }
      <form className={'inputContainer'} onSubmit={handleSubmit}>
        <input className={'input-wrapper'} placeholder="Enter Pokemon name here" onChange={onChangeHandler}></input>
        <button className={'submitButton'}>Submit</button>
      </form>
        <div className="pokemon">
          <QuizContent pokemon={pokemon} answer={answer} setAnswer={setAnswer}/>
        </div>
        <div className="answerWrapper">
          <QuizAnswer pokemon={pokemon} correctPokemon={correctPokemon} startPokemon={value} />
        </div>
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
      </div>
  )
}

export default QuizContainer
