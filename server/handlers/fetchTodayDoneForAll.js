import handlerFactory from "./handlerFactory"
import Database from "../common/Database"
import { isToday } from "../common/Utils"

const handle = (requestData, callback) => {
  let dbToClose
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db;
      return db.collection("records").find({}).toArray();
    })
    .then(docs => {
      dbToClose.close();
      callback({
        todayDones: docs.reduce(
          (result, { id, timestamp }) => {
            if (isToday(timestamp)) {
              return result.concat(id)
            }
            return result
          },
          []
        ),
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

export default handlerFactory(handle, "/fetchTodayDoneForAll", [])
