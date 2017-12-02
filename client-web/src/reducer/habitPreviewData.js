export default (state = [], { type, payload }) => {
  const newState = [ ...state ]
  switch (type) {
    case "FETCH_HABIT_PREVIEW_DATA": {
      return payload
    }
    case "SET_TODAY_DONE": {
      const id = payload
      const habit = newState.filter(habit => habit.id === id)
      if (habit.streak.streakType === "HIT") {
        return newState
      // } else
      //   habit.streak.streakLength += 1
      // } else {
      //   habit.streak.streakLength = 1
      //   habit.streak.streakType = "HIT"
      }
      return newState
    }
    case "SET_UNDONE": {
      const id = payload
      const habit = newState.filter(habit => habit.id === id)
      if (habit.streak.streakType === "HIT" && habit.streak.streakLength > 1) {
        habit.streak.streakType = "MISS"
        habit.streak.streakLength = 1
      } else {
      }
      return newState
    }
    default: {
      return newState
    }
  }
}
