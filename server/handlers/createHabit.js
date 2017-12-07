import Database from "~/common/Database"

import handlerFactory from "./handlerFactory"

const asyncHandle = async (requestData, callback) => {
  const doc = {
    ...requestData,
    id: Date.now(),
  }
  const { db } = await Database.getMongoClientPromise()
  await Database.insertDocPromise({
    db,
    collection: "habits",
    doc,
  })
  await db.close()
  callback({
    success: true,
    id: doc.id,
  })
}

export default handlerFactory(asyncHandle, "/createHabit", ["name"])
