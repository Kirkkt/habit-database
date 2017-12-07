import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

const asyncHandle = async (requestData, callback) => {
  const { db } = await Database.getMongoClientPromise()
  await Database.deleteManyPromise({
    db,
    collection: "habits",
    pattern: { id: Number.parseInt(requestData.id) },
  })
  await db.close()
  callback({
    success: true,
  })
}

export default handlerFactory(asyncHandle, "/deleteHabit", ["id"])
