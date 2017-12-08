import React from "react"
import { compose, lifecycle } from "recompose"

import { fetchHabitDetailedData } from "actions"

import TopBar from "./TopBar"

const Habit = ({ history, match: { params: { id } } }) => (
  <div>
    <TopBar />
    <div style={{ height: 2000, width: "100%"}}/>
  </div>
)

export default compose(
  lifecycle({
    componentWillMount() {
      fetchHabitDetailedData()
    },
  }),
)(Habit)
