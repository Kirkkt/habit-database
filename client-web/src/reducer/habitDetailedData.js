import {
  FETCH_HABIT_DETAILED_DATA,
  UPDATE_HABIT,
  SET_TODAY_DONE,
  SET_TODAY_UNDONE,
} from "actions/actionTypes"
import { deepClone } from "common/Utils"

export default (state = {}, { type, payload }) => {
  const newState = { ...state }
  switch (type) {
    case FETCH_HABIT_DETAILED_DATA: {
      const newData = {}
      newData[payload.id] = payload
      return {
        ...newState,
        ...newData,
      }
    }
    case UPDATE_HABIT: {
      const newData = {}
      newData[payload.id] = {
        ...newState[payload.id],
        ...payload.data,
      }
      return {
        ...newState,
        ...newData,
      }
    }
    case SET_TODAY_DONE: {
      const id = payload
      if (!newState[id]) {
        return newState
      }
      const newStateDeepClone = deepClone(newState)
      newStateDeepClone[id].timestamps.push(Date.now())
      return newStateDeepClone
    }
    case SET_TODAY_UNDONE: {
      const id = payload
      if (!newState[id]) {
        return newState
      }
      const newStateDeepClone = deepClone(newState)
      newStateDeepClone[id].timestamps.pop()
      return newStateDeepClone
    }
    default: {
      return newState
    }
  }
}
