import handlerFactory from "./handlerFactory"
// TODO: how to import by absolute path
import Database from "../common/Database"
import { daysAgo } from "../common/Utils"

const getMissStreak = timestamps => daysAgo(timestamps[0])

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
      // TODO: use enum
      streakType: "NEW",
    }
  }
  const hitStreak = getHitStreak(timestamps)
  if (hitStreak !== 0) {
    return {
      streakType: "HIT",
      streakLenght: hitStreak,
    }
  }
  return {
    streakType: "MISS",
    streakLenght: getMissStreak(timestamps)
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
    doneToday: streak.streakType === "HIT",
  }
})

const handle = (requestData, callback) => {
  let dbToClose
  let habits
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db
      return db.collection("habits").find({}).toArray()
    })
    .then(docs => {
      habits = docs.map(habit => {
        // TODO: ramda or lodashFP?
        delete habit["_id"]
        return habit
      })
      return dbToClose.collection("records").find({}).toArray()
    })
    .then(docs => {
      dbToClose.close()
      const records = docs.map(record => {
        delete record["_id"]
        return record
      })
      callback({
        success: true,
        data: getHabitPreviewData(habits, records),
      })
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/fetchHabitPreviewData", [])
