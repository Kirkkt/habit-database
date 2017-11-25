import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

// TODO: convert to generator/async
const handle = (requestData, callback) => {
  Database.getMongoClientPromise()
    .then(({db}) => {
      return Database.upsertDocPromise({
        db,
        collection: "habits",
        pattern: { id: Number.parseInt(requestData.id) },
        doc: requestData,
      })
    })
    .then(({db}) => {
      db.close();
      callback({
        success: true,
      })
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/updateHabit", ["id"])
