import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabitPreviewData } from "actions"
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
    () => ({ fetchHabitPreviewData }),
  ),
  lifecycle({
    componentWillMount() {
      this.props.fetchHabitPreviewData()
    },
  }),
)(HabitList)
