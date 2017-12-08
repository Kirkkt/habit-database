import React from "react"
import { compose, withState, mapProps } from "recompose"
import { withRouter } from "react-router-dom"

const Habit = ({ history }) => (
  <div>
  <button onClick={() => history.push('/')}>hello</button>
  </div>
)

export default compose(
  withRouter,
)(Habit)
