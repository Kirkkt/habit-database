import React from "react"
import { compose, lifecycle, withProps } from "recompose"

import { fetchHabitDetailedData } from "actions"

import TopBar from "./TopBar"

const Habit = ({ history, id }) => (
  <div>
    <TopBar id={id} />
    <div style={{ height: 2000, width: "100%"}}/>
  </div>
)

export default compose(
  withProps(({
    match: {
      params: {
        id,
      },
    },
  }) => ({
    id: +id,
  })),
  lifecycle({
    componentWillMount() {
      fetchHabitDetailedData(this.props.id)
    },
  }),
)(Habit)
