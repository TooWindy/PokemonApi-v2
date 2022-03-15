import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../redux/pokemon";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import { searchPokemon } from "../redux/pokemon";

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])
  const [answer, setAnswer] = useState(false)
  const [value, setValue] = useState("")

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
    // dispatch(searchPokemon(value))
    event.target.reset()
    setValue("")
  }
  return (
    <div className={"contentContainer"}>
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
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
      </div>
  )
}

export default QuizContainer
