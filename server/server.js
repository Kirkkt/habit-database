import express from "express"

import fetchHabitsHandler from "./handlers/fetchHabitsHandler"
import createHabitHandler from "./handlers/createHabitHandler"
import updateHabitHandler from "./handlers/updateHabitHandler"
import deleteHabitHandler from "./handlers/deleteHabitHandler"
import setDoneHandler from "./handlers/setDoneHandler"
// import setUndoneHandler from "./handlers/setUndoneHandler"

const app = express()

app.post("/fetchHabits", fetchHabitsHandler)
app.post("/createHabit", createHabitHandler)
app.post("/updateHabit", updateHabitHandler)
app.post("/deleteHabit", deleteHabitHandler)
app.post("/setDone", setDoneHandler)
// app.post("/setUndone", setUndoneHandler)

/* istanbul ignore next */
if (!module.parent) {
  app.listen(2379)
  console.log("Express started on port 2379")
}
