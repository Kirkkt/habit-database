import React from "react"
import Checkbox from "material-ui/Checkbox"
import { setTodayDone, setTodayUndone } from "actions"
import { compose, withHandlers } from "recompose"

const TodayDoneCheckbox = ({ id, toggleDoneToday, doneToday }) => (
  <Checkbox
    checked={doneToday}
    onChange={toggleDoneToday}
  />
)

export default compose(
  withHandlers({
    toggleDoneToday: ({
      id,
      doneToday,
      afterChecked,
    }) => () => {
      if (doneToday) {
        setTodayUndone(id, afterChecked)
      } else {
        setTodayDone(id, afterChecked)
      }
    }
  }),
)(TodayDoneCheckbox)
