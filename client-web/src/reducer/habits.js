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
    default: {
      return newState
    }
  }
}
