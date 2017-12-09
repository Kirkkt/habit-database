const MILLI_SECONDS_IN_DAY = 24 * 60 * 60 * 1000

export const sleepPromise = time => new Promise((resolve) => {
  setTimeout(
    resolve,
    time
  )
})

export const normalizeToMidnight = timestamp => new Date((new Date(timestamp)).toDateString())

export const daysBefore = (timestampA, timestampB) => {
  return (normalizeToMidnight(timestampB) - normalizeToMidnight(timestampA)) / MILLI_SECONDS_IN_DAY
}
