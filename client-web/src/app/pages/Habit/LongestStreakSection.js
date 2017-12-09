import React from "react"
import { compose, lifecycle, withProps } from "recompose"
import { connect } from "react-redux"

import { daysBefore } from "common/Utils"

const getLongestStreak = timestamps => {
  let result = timestamps && timestamps.length > 0 ? 1 : 0
  let currentStreak = 0
  for (let i = 0; i < timestamps.length - 1; i++) {
    if (daysBefore(timestamps[i], timestamps[i + 1]) === 1) {
      currentStreak += 1
    } else {
      result = Math.max(result, currentStreak)
      currentStreak = 0
    }
  }
  return Math.max(result, currentStreak)
}

const LongestStreakSection = ({ timestamps }) => (
  <h3>
    Longest streak: {getLongestStreak(timestamps)}
  </h3>
)

export default compose(
)(LongestStreakSection)
