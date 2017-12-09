import React from "react"
import { compose, lifecycle, withProps } from "recompose"
import { connect } from "react-redux"
import styled from "styled-components"

import { fetchHabitDetailedData } from "actions"

import CalendarSection from "./CalendarSection"
import LongestStreakSection from "./LongestStreakSection"
import TodayDoneSection from "./TodayDoneSection"
import TopBar from "./TopBar"

const SectionsWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

const Habit = ({ history, id, name, timestamps }) => (
  <div>
    <TopBar id={id} name={name} />
    <SectionsWrapper>
      <TodayDoneSection id={id} timestamps={timestamps} />
      <LongestStreakSection timestamps={timestamps} />
      <CalendarSection timestamps={timestamps} />
    </SectionsWrapper>
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
  connect(({ habitDetailedData }) => ({ habitDetailedData })),
  withProps(({
    habitDetailedData,
    id,
  }) => ({
    timestamps: (habitDetailedData[id] || {}).timestamps || [],
    name: (habitDetailedData[id] || {}).name || "",
  })),
  lifecycle({
    componentWillMount() {
      fetchHabitDetailedData(this.props.id)
    },
  }),
)(Habit)
