// TODO: delete
export const isToday = timestamp => {
  return (new Date(timestamp)).toDateString() === (new Date()).toDateString()
}

const MILLI_SECONDS_IN_DAY = 24 * 60 * 60 * 1000

// TODO: test
export const normalizeToMidnight = timestamp => new Date((new Date(timestamp)).toDateString())

export const daysAgo = timestamp => {
  const normalizedToday = normalizeToMidnight(Date.now())
  const normalized = normalizeToMidnight(timestamp)
  return (normalizedToday - normalized) / MILLI_SECONDS_IN_DAY
}
