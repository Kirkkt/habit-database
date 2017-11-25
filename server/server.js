import express from "express"

import fetchHabits from "./handlers/fetchHabits"
import createHabit from "./handlers/createHabit"
import updateHabit from "./handlers/updateHabit"
import deleteHabit from "./handlers/deleteHabit"
import fetchTodayDoneForAll from "./handlers/fetchTodayDoneForAll"
import setTodayDone from "./handlers/setTodayDone"
import setTodayUndone from "./handlers/setTodayUndone"

const app = express()

app.post("/fetchHabits", fetchHabits)
app.post("/createHabit", createHabit)
app.post("/updateHabit", updateHabit)
app.post("/deleteHabit", deleteHabit)
app.post("/fetchTodayDoneForAll", fetchTodayDoneForAll)
app.post("/setTodayDone", setTodayDone)
app.post("/setTodayUndone", setTodayUndone)

/* istanbul ignore next */
if (!module.parent) {
  app.listen(2379)
  console.log("Express started on port 2379")
}
