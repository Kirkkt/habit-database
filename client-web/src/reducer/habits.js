export default (state = [], { type, payload }) => {
  const newState = [...state]
  switch (type) {
    case "FETCH_HABITS": {
      const habits = payload
      return habits
    }
    case "CREATE_HABIT": {
      const habit = payload
      return [
        ...newState,
        habit,
      ]
    }
    case "DELETE_HABIT": {
      const id = payload
      return newState.filter(habit => habit.id !== id)
    }
    default: {
      return newState
    }
  }
}
