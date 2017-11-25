import handlerFactory from "./handlerFactory"
import Database from "../common/Database"

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
        records: docs.map(record => {
          // TODO: ramda or lodashFP?
          delete record["_id"]
          return record
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

export default handlerFactory(handle, "/fetchRecords", [])
