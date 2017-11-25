import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

const handle = (requestData, callback) => {
  let dbToClose
  Database.getMongoClientPromise()
    .then(({db}) => {
      dbToClose = db;
      return db.collection("habits").find({}).toArray();
    })
    .then(docs => {
      dbToClose.close();
      callback({
        habits: docs.map(habit => {
          // TODO: ramda or lodashFP?
          delete habit["_id"]
          return habit
        }),
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

export default handlerFactory(handle, "/fetchHabits", [])
