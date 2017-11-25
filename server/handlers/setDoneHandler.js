import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

const handle = ({ id }, callback) => {
  let dbToClose;
  const timestamp = Date.now()
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db
      return db.collection("records").find({ id }).toArray()
    }).then(docs => {
      if (docs.length === 0) {
        return Database.insertDocPromise({
          db: dbToClose,
          collection: "records",
          doc: {
            id,
            timestamp,
          }
        })
      } else {
        return Promise.resolve({ docs, db: dbToClose })
      }
    }).then(({ docs, db }) => {
      db.close()
      callback({
        success: true,
        id,
        timestamp: docs ? docs[0].timestamp : timestamp,
      })
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/setDone", ["id"])
