import handlerFactory from "./handlerFactory"
import Database from "../common/Database"
import { isToday } from "../common/Utils"

const handle = ({ id }, callback) => {
  let dbToClose;
  const currentTimestamp = Date.now()
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db
      return db.collection("records").find({ id }).toArray()
    }).then(docs => {
      const matches = docs.filter(({ timestamp }) => isToday(timestamp))
      if (matches.length === 0) {
        dbToClose.close()
        callback({
          success: true,
          id,
        })
        return Promise.resolve(dbToClose)
      } else {
        const timestamp = matches[0].timestamp
        callback({
          success: true,
          id,
          timestamp,
        })
        return Database.deleteManyPromise({
          db: dbToClose,
          collection: "records",
          pattern: {
            id,
            timestamp,
          },
        })
      }
    }).then(({ db }) => {
      db.close()
    })
    .catch(err => callback({
      error: {
        message: '' + err.message,
      },
      success: false,
    }))
}

export default handlerFactory(handle, "/setTodayUndone", ["id"])
