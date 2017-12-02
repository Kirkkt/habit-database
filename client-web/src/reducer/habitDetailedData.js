export default (state = {}, { type, payload }) => {
  const newState = { ...state }
  switch (type) {
    case "FETCH_HABIT_PREVIEW_DATA": {
      return payload
    }
    // case "SET_DONE": {
    //   const { id, timestamp } = payload
    //   if (newState[id]) {
    //     newState[id] = newState[id].concat(timestamp)
    //   } else {
    //     newState[id] = [ timestamp ]
    //   }
    //   return newState
    // }
    // case "SET_UNDONE": {
    //   const { id, timestamp } = payload
    //   newState[id] = newState[id].filter(t => t !== timestamp)
    //   return newState
    // }
    default: {
      return newState
    }
  }
}
