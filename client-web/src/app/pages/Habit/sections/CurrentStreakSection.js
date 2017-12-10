import React from "react"

import { daysBefore, daysAgo } from "common/Utils"
import { HitText, MissText } from "app/components/styles"

const getCurrentHitStreak = days => (
  <span>
    <HitText>HIT</HitText> {days}
  </span>
)

const getCurrentStreak = timestamps => {
  if (!timestamps || timestamps.length === 0) {
    return "N/A"
  }
  const lastDaysAgo = daysAgo(timestamps[timestamps.length - 1])
  if (lastDaysAgo !== 0) {
    return (
      <span>
        <MissText>MISS</MissText> {lastDaysAgo}
      </span>
    )
  }
  let currentHitStreakDays = 1
  for (let i = timestamps.length - 1; i > 0; i--) {
    if (daysBefore(timestamps[i - 1], timestamps[i]) === 1) {
      currentHitStreakDays += 1
    } else {
      return getCurrentHitStreak(currentHitStreakDays)
    }
  }
  return getCurrentHitStreak(currentHitStreakDays)
}

const CurrentStreakSection = ({ timestamps }) => (
  <h3>
    Current streak: {getCurrentStreak(timestamps)}
  </h3>
)

export default CurrentStreakSection
