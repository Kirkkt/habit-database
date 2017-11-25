export default (state = [], { type, payload }) => {
  const newState = [ ...state ]
  switch (type) {
    case "FETCH_TODAY_DONE_FOR_ALL": {
      return payload
    }
    case "SET_TODAY_DONE": {
      return newState.concat(payload.id)
    }
    case "SET_TODAY_UNDONE": {
      return newState.filter(id => id !== payload.id)
    }
    default: {
      return newState
    }
  }
}
