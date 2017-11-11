import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabits } from "../../../actions/habits"

const HabitList = ({ habits }) => (
  <div>
    {
      habits.map(({ name, id }) => (
        <div key={id}>
          {name}
        </div>
      ))
    }
  </div>
)

export default compose(
  connect(
    ({ habits }) => ({ habits }),
    () => ({ fetchHabits }),
  ),
  lifecycle({
    componentWillMount() {
      this.props.fetchHabits()
    },
  }),
)(HabitList)
