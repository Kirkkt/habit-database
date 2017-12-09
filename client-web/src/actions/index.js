import store from "store"
import {
  CREATE_HABIT_SAGA,
  DELETE_HABIT_SAGA,
  FETCH_HABIT_DETAILED_DATA_SAGA,
  FETCH_HABIT_PREVIEW_DATA_SAGA,
  SET_TODAY_DONE_SAGA,
  SET_TODAY_UNDONE_SAGA,
  UPDATE_HABIT_SAGA,
} from "actions/actionTypes"

export const createHabit = name => {
  store.dispatch({
    type: CREATE_HABIT_SAGA,
    payload: name,
  })
}

// TODO: pagination
export const fetchHabitPreviewData = () => {
  store.dispatch({
    type: FETCH_HABIT_PREVIEW_DATA_SAGA,
  })
}

export const setTodayDone = id => {
  store.dispatch({
    type: SET_TODAY_DONE_SAGA,
    payload: id,
  })
}

export const setTodayUndone = id => {
  store.dispatch({
    type: SET_TODAY_UNDONE_SAGA,
    payload: id,
  })
}

export const deleteHabit = payload => {
  store.dispatch({
    type: DELETE_HABIT_SAGA,
    payload,
  })
}

export const fetchHabitDetailedData = id => {
  store.dispatch({
    type: FETCH_HABIT_DETAILED_DATA_SAGA,
    payload: id,
  })
}

export const renameHabit = (id, name) => {
  store.dispatch({
    type: UPDATE_HABIT_SAGA,
    payload: {
      id,
      data: {
        name,
      },
    },
  })
}
