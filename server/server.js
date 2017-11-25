import express from "express"

import fetchHabits from "./handlers/fetchHabits"
import createHabit from "./handlers/createHabit"
import updateHabit from "./handlers/updateHabit"
import deleteHabit from "./handlers/deleteHabit"
import fetchRecords from "./handlers/fetchRecords"
import setDone from "./handlers/setDone"
// import setUndone from "./handlers/setUndone"

const app = express()

app.post("/fetchHabits", fetchHabits)
app.post("/createHabit", createHabit)
app.post("/updateHabit", updateHabit)
app.post("/deleteHabit", deleteHabit)
app.post("/fetchRecords", fetchRecords)
app.post("/setDone", setDone)
// app.post("/setUndone", setUndone)

/* istanbul ignore next */
if (!module.parent) {
  app.listen(2379)
  console.log("Express started on port 2379")
}
