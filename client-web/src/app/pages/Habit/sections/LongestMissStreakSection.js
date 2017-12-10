import React from "react"

import { daysBefore, daysAgo } from "common/Utils"
import { MissText } from "app/components/styles"

const getLongestMissStreak = timestamps => {
  if (!timestamps || !timestamps.length > 0) {
    return "N/A"
  }
  let result = 0
  for (let i = 0; i < timestamps.length - 1; i++) {
    result = Math.max(result, daysBefore(timestamps[i], timestamps[i + 1]) - 1)
  }
  return Math.max(result, daysAgo(timestamps[timestamps.length - 1]))
}

const LongestMissStreakSection = ({ timestamps }) => (
  <h3>
    Longest <MissText>MISS</MissText> streak: {getLongestMissStreak(timestamps)}
  </h3>
)

export default LongestMissStreakSection
