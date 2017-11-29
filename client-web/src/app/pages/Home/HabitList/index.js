import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabits } from "actions/habits"
import { fetchTodayDoneForAll } from "actions/todayDones"
import HabitListItem from "./HabitListItem"

const HabitList = ({ habits, todayDones }) => (
  <div>
    {
      habits.map((habit, index) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          todayDone={todayDones.some(id => +id === +habit.id) }
          isOddItem={index % 2 === 0}
        />
      ))
    }
  </div>
)

export default compose(
  connect(
    ({ habits, todayDones }) => ({ habits, todayDones }),
    () => ({ fetchHabits, fetchTodayDoneForAll }),
  ),
  lifecycle({
    componentWillMount() {
      this.props.fetchHabits()
      this.props.fetchTodayDoneForAll()
    },
  }),
)(HabitList)
