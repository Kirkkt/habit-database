import handlerFactory from "./handlerFactory"
import Database from "../common/Database"
import { isToday } from "../common/Utils"

const getTimestampInMatches = async ({ db, id, matches }) => {
  if (matches && matches.length > 0) {
    return matches[0]
  }
  const { timestamp } = await Database.insertDocPromise({
    db,
    collection: "records",
    doc: {
      id,
      timestamp: Date.now(),
    }
  })
  return timestamp
}

const asyncHandle = async ({ id }, callback) => {
  id = +id;
  const { db } = await Database.getMongoClientPromise()
  const recordDocs = await db.collection("records").find({ id }).toArray()
  const matches = recordDocs.filter(({ timestamp }) => isToday(timestamp))
  const timestamp = await getTimestampInMatches({ db, id, matches })
  await db.close()
  callback({
    success: true,
    timestamp,
  })
}

export default handlerFactory(asyncHandle, "/setTodayDone", ["id"])
