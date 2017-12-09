import express from "express"

import createHabit from "./handlers/createHabit"
// import updateHabit from "./handlers/updateHabit"
import deleteHabit from "./handlers/deleteHabit"
import setTodayDone from "./handlers/setTodayDone"
import setTodayUndone from "./handlers/setTodayUndone"

import fetchHabitDetailedData from "./handlers/fetchHabitDetailedData"
import fetchHabitPreviewData from "./handlers/fetchHabitPreviewData"

const app = express()

app.post("/createHabit", createHabit)
// app.post("/updateHabit", updateHabit)
app.post("/deleteHabit", deleteHabit)
app.post("/setTodayDone", setTodayDone)
app.post("/setTodayUndone", setTodayUndone)
app.post("/fetchHabitDetailedData", fetchHabitDetailedData)
app.post("/fetchHabitPreviewData", fetchHabitPreviewData)

/* istanbul ignore next */
if (!module.parent) {
  app.listen(2379)
  console.log("Express started on port 2379")
}

function* hello() {
  console.log('gen')
}
