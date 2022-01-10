import React from "react";
import { Route } from "react-router-dom";
import Pokemon from "./Components/Pokemon"
import QuizContainer from "./Components/QuizContainer";


const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Pokemon}/>
      <Route exact path ='/quiz' component={QuizContainer}/>
    </div>
  )
}

export default Routes
