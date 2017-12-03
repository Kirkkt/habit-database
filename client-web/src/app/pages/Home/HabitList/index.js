import React from "react"
import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { fetchHabitPreviewData } from "actions"
import HabitListItem from "./HabitListItem"

const HabitList = ({ habitPreviewData }) => (
  <div>
    {
      habitPreviewData.map((habit, index) => (
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
    ({ habitPreviewData }) => ({ habitPreviewData }),
    () => ({ fetchHabitPreviewData }),
  ),
  lifecycle({
    componentWillMount() {
      this.props.fetchHabitPreviewData()
    },
  }),
)(HabitList)
