import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../redux/pokemon";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])

  useEffect(() => {
    dispatch(getRandomPokemon())
  },[])

  const quitClick = () => {
    history.push("/")
  }
  return (
    <div className={"contentContainer"}>
      <h1 className={"title"}>Name that pokemon!</h1>
        <div className="pokemon">
          <QuizContent pokemon={pokemon}/>
        </div>
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
      </div>
  )
}

export default QuizContainer
