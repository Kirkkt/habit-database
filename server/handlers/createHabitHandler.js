import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

// TODO: how to enable dev env hot reload for node/express?
const handle = (requestData, callback) => {
  const doc = {
    ...requestData,
    id: Date.now(),
  }
  Database.getMongoClientPromise()
    .then(({db}) => {
      return Database.insertDocPromise({
        db,
        collection: "habits",
        doc,
      })
    })
    .then(({db}) => {
      db.close();
      callback({
        success: true,
        id: doc.id,
      })
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/createHabit", ["name"])
