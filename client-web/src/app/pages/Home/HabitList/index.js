import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabits } from "../../../../actions/habits"
import { fetchRecords } from "../../../../actions/records"
import HabitListItem from "./HabitListItem"

const HabitList = ({ habits, records }) => (
  <div>
    {
      habits.map((habit, index) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          timestamps={(records && records[habit.id]) || []}
          isOddItem={index % 2 === 0}
          />
      ))
    }
  </div>
)

export default compose(
  connect(
    ({ habits, records }) => ({ habits, records }),
    () => ({ fetchHabits, fetchRecords }),
  ),
  lifecycle({
    componentWillMount() {
      this.props.fetchHabits()
      this.props.fetchRecords()
    },
  }),
)(HabitList)
