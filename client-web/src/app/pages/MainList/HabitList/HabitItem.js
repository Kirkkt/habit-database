import React from "react"
import { compose } from "recompose"

const HabitItem = ({ habit: { name }}) => (
  <div>
    {name}
  </div>
)
export default compose(
)(HabitItem)
