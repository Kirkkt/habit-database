import Database from "~/common/Database"

import handlerFactory from "./handlerFactory"

const getDoc = (requestData, habit) => {
  let doc = {}
  for (const key in requestData) {
    if (key === "id") {
      continue
    }
    doc[key] = requestData[key]
  }
  return {
    ...habit,
    ...doc,
  }
}

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
  await Database.upsertDocPromise({
    db,
    collection: "habits",
    pattern: { id: Number.parseInt(requestData.id) },
    doc: getDoc(requestData, habit),
  })
  await db.close()
  callback({
    success: true,
  })
}

export default handlerFactory(asyncHandle, "/updateHabit", ["id"])
