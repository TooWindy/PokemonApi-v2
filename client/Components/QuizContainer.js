import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../redux/pokemon";
import QuizContent from "./QuizContent";

const QuizContainer = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon || [])

  useEffect(() => {
    dispatch(getRandomPokemon())
  },[])

  return (
    <div>
      <h1>Name that pokemon!</h1>
        <div className="pokemon">
          <QuizContent pokemon={pokemon}/>
        </div>
      </div>
  )
}

export default QuizContainer
