import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabits } from "../../../../actions/habits"
import HabitListItem from "./HabitListItem"

const HabitList = ({ habits }) => (
  <div>
    {
      habits.map((habit, index) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          isOddItem={index % 2 === 0}
          />
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
