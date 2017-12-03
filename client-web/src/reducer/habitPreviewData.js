export default (state = [], { type, payload }) => {
  const newState = [ ...state ]
  switch (type) {
    case "FETCH_HABIT_PREVIEW_DATA": {
      return payload
    }
    case "CREATE_HABIT": {
      const newHabit = {
        ...payload,
        streak: {
          streakType: "NEW",
        },
        doneToday: false,
      }
      return [
        ...newState,
        newHabit,
      ]
    }
    case "DELETE_HABIT": {
      const id = payload
      return newState.filter(habit => habit.id !== id)
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
