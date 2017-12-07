// import handlerFactory from "./handlerFactory"
// import Database from "../common/Database"

// const asyncHandle = async ({ id }, callback) => {
//   try {
//     id = +id;
//     const currentTimestamp = Date.now()
//     const { db } = await Database.getMongoClientPromise()
//   } catch (error) {
//     callback({
//       success: false,
//       error,
//     })
//   }
// }

// const handle = (requestData, callback) => {
//   Database.getMongoClientPromise()
//     .then(({db}) => {
//       return Database.upsertDocPromise({
//         db,
//         collection: "habits",
//         pattern: { id: Number.parseInt(requestData.id) },
//         doc: requestData,
//       })
//     })
//     .then(({db}) => {
//       db.close();
//       callback({
//         success: true,
//       })
//     })
//     .catch(err => callback({
//       error: {
//         message: '' + err.message,
//       },
//       success: false,
//     }))
// }

// export default handlerFactory(handle, "/updateHabit", ["id"])
