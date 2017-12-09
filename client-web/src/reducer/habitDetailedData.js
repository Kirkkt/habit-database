import {
  FETCH_HABIT_DETAILED_DATA,
  UPDATE_HABIT,
} from "actions/actionTypes"

export default (state = {}, { type, payload }) => {
  const newState = { ...state }
  switch (type) {
    case FETCH_HABIT_DETAILED_DATA: {
      return payload
    }
    case UPDATE_HABIT: {
      return {
        ...newState,
        ...payload,
      }
    }
    default: {
      return newState
    }
  }
}
