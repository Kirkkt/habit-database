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

export const daysAgo = timestamp => {
  const normalizedToday = normalizeToMidnight(Date.now())
  const normalized = normalizeToMidnight(timestamp)
  return (normalizedToday - normalized) / MILLI_SECONDS_IN_DAY
}

export const deepClone = entity => {
  if (entity === null) {
    return null
  }
  if (entity instanceof Function) {
    return entity
  }
  if (typeof entity !== "object") {
    return entity
  }
  if (entity instanceof Array) {
    return entity.map(item => deepClone(item))
  }
  const result = {}
  for (const key in entity) {
    result[key] = deepClone(entity[key])
  }
  return result
}
