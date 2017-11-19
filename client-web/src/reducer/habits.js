export default (state = [], { type, payload }) => {
  const newState = [...state]
  switch (type) {
    case "FETCH_HABITS": {
      return payload
    }
    case "CREATE_HABIT": {
      return [
        ...newState,
        payload,
      ]
    }
    case "DELETE_HABIT": {
      return newState.filter(habit => habit.id !== payload)
    }
    default: {
      return newState
    }
  }
}
