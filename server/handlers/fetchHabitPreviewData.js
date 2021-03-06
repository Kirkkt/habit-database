import Database from "~/common/Database"
import { daysAgo } from "~/common/Utils"
import { StreakTypes } from "~/common/Constants"

import handlerFactory from "./handlerFactory"

const getHitStreak = timestamps => {
  let hitStreak = 0
  let i = 0
  while (true) {
    if (i === timestamps.length) {
      return hitStreak
    }
    if (daysAgo(timestamps[i]) === hitStreak) {
      i++
      hitStreak++
    }
    return hitStreak
  }
}

const getStreak = timestamps => {
  if (!timestamps || timestamps.length === 0) {
    return {
      streakType: StreakTypes.NEW,
    }
  }
  const hitStreak = getHitStreak(timestamps)
  if (hitStreak !== 0) {
    return {
      streakType: StreakTypes.HIT,
      streakLength: hitStreak,
    }
  }
  for (let i = 0; i < timestamps.length; i++) {
    if (daysAgo(timestamps[i]) >= 0) {
      return {
        streakType: StreakTypes.MISS,
        streakLength: daysAgo(timestamps[i]),
      }
    }
  }
  return {
    streakType: StreakTypes.NEW,
  }
}

const getHabitPreviewData = (habits, records) => habits.map(habit => {
  const timestamps = records
    .filter(({ id }) => +id === +habit.id)
    .map(({ timestamp }) => timestamp)
  timestamps.sort((a, b) => b - a)
  const streak = getStreak(timestamps)
  return {
    ...habit,
    streak,
    doneToday: streak.streakType === StreakTypes.HIT,
  }
})

const asyncHandle = async (requestData, callback) => {
  const { db } = await Database.getMongoClientPromise()
  const habitDocs = await db.collection("habits").find({}).toArray()
  const habits = habitDocs.map(habit => {
    delete habit["_id"]
    return habit
  })
  const recordDocs = await db.collection("records").find({}).toArray()
  const records = recordDocs.map(record => {
    delete record["_id"]
    return record
  })
  await db.close()
  callback({
    success: true,
    data: getHabitPreviewData(habits, records),
  })
}

export default handlerFactory(asyncHandle, "/fetchHabitPreviewData", [])
