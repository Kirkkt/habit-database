import React from "react"
import styled from "styled-components"

import { daysAgo } from "common/Utils"
import TodayDoneCheckbox from "app/components/TodayDoneCheckbox"

const getDoneToday = timestamps => {
  if (!timestamps || timestamps.length === 0) {
    return false
  }
  const lastTimestamp = timestamps[timestamps.length - 1]
  return daysAgo(lastTimestamp) === 0
}

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
`

const LabelWrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin: auto;
`

const TodayDoneSection = ({ id, timestamps }) => (
  <SectionWrapper>
    <TodayDoneCheckbox
      id={id}
      doneToday={getDoneToday(timestamps)}
    />
    <LabelWrapper style={{display: 'inline-block', margin: 'auto'}}>
      Mark as done for today
    </LabelWrapper>
  </SectionWrapper>
)

export default TodayDoneSection
