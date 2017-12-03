export default (state = [], { type, payload }) => {
  const newState = [ ...state ]
  switch (type) {
    case "FETCH_HABIT_PREVIEW_DATA": {
      return payload
    }
    case "SET_TODAY_DONE": {
      const id = payload
      const habit = newState.filter(habit => habit.id === id)[0]
      habit.doneToday = true
      return newState
    }
    case "SET_TODAY_UNDONE": {
      const id = payload
      const habit = newState.filter(habit => habit.id === id)[0]
      habit.doneToday = false
      return newState
    }
    default: {
      return newState
    }
  }
}
