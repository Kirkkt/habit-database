import React from "react"
import { compose, withState, mapProps } from "recompose"
import { withRouter } from "react-router-dom"

const Habit = ({ history, match: { params: { id } } }) => (
  <div>
    hello, {id}
  </div>
)

export default compose(
  withRouter,
)(Habit)
