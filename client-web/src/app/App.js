import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/Home"
import Habit from "./pages/Habit"

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/habit/:id" component={Habit} />
  </div>
)
