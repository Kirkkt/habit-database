import React from "react"

import { daysBefore } from "common/Utils"
import { HitText } from "app/components/styles"

const getLongestHitStreak = timestamps => {
  if (!timestamps || timestamps.length === 0) {
    return "N/A"
  }
  let result = 1
  let currentStreak = 1
  for (let i = 0; i < timestamps.length - 1; i++) {
    if (daysBefore(timestamps[i], timestamps[i + 1]) === 1) {
      currentStreak += 1
    } else {
      result = Math.max(result, currentStreak)
      currentStreak = 1
    }
  }
  return Math.max(result, currentStreak)
}

const LongestHitStreakSection = ({ timestamps }) => (
  <h3>
    Longest <HitText>HIT</HitText> streak: {getLongestHitStreak(timestamps)}
  </h3>
)

export default LongestHitStreakSection
