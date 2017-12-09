import Database from "~/common/Database"
import { daysAgo } from "~/common/Utils"
import { StreakTypes } from "~/common/Constants"

import handlerFactory from "./handlerFactory"

const getHabitDetailedData = (habit, records) => ({
  ...habit,
  timestamps: records.map(({ timestamp }) => timestamp),
})

const asyncHandle = async (requestData, callback) => {
  const { db } = await Database.getMongoClientPromise()
  const habitDocs = await db.collection("habits").find({ id: +requestData.id }).toArray()
  if (!habitDocs || habitDocs.length === 0) {
    callback({
      success: false,
      error: {
        message: `No habit with this id is found, id: ${requestData.id}`
      }
    })
    return
  }
  const habit = habitDocs[0]
  delete habit["_id"]
  const recordDocs = await db.collection("records").find({id: +requestData.id }).toArray()
  const records = recordDocs.map(record => {
    delete record["_id"]
    return record
  })
  await db.close()
  callback({
    success: true,
    data: getHabitDetailedData(habit, records),
  })
}

export default handlerFactory(asyncHandle, "/fetchHabitDetailedData", ["id"])
