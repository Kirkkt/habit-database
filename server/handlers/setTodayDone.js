import handlerFactory from "./handlerFactory"
import Database from "../common/Database"
import { isToday } from "../common/Utils"

const handle = ({ id }, callback) => {
  id = +id
  let dbToClose;
  const currentTimestamp = Date.now()
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db
      return db.collection("records").find({ id }).toArray()
    }).then(docs => {
      const matches = docs.filter(({ timestamp }) => isToday(timestamp))
      if (matches.length === 0) {
        return Database.insertDocPromise({
          db: dbToClose,
          collection: "records",
          doc: {
            id,
            timestamp: currentTimestamp,
          }
        })
      } else {
        return Promise.resolve({ timestamp: matches[0].timestamp, db: dbToClose })
      }
    }).then(({ timestamp, db }) => {
      db.close()
      callback({
        success: true,
        id,
        timestamp: timestamp || currentTimestamp,
      })
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/setTodayDone", ["id"])
