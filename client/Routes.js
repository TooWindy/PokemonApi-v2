import React from "react";
import { Route } from "react-router-dom";
import Pokemon from "./Components/Pokemon"


const Routes = () => {
  return (
    <div>
      <Route path="/" component={Pokemon}/>
    </div>
  )
}

export default Routes
