import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabits } from "../../../../actions/habits"
import HabitItem from "./HabitItem"

const HabitList = ({ habits }) => (
  <div>
    {
      habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
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
