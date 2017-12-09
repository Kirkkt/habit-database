import store from "store"
import {
  CREATE_HABIT_SAGA,
  DELETE_HABIT_SAGA,
  FETCH_HABIT_DETAILED_DATA_SAGA,
  FETCH_HABIT_PREVIEW_DATA_SAGA,
  SET_TODAY_DONE_SAGA,
  SET_TODAY_UNDONE_SAGA,
  UPDATE_HABIT_SAGA,
  ERROR,
} from "actions/actionTypes"

export const createHabit = name => {
  if (!name) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `name is falsy: ${name}`,
      },
    })
  }
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

export const setTodayDone = (id, callback) => {
  if (!id) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `id is falsy: ${id}`,
      },
    })
  }
  store.dispatch({
    type: SET_TODAY_DONE_SAGA,
    payload: {
      id,
      callback,
    },
  })
}

export const setTodayUndone = (id, callback) => {
  if (!id) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `id is falsy: ${id}`,
      },
    })
  }
  store.dispatch({
    type: SET_TODAY_UNDONE_SAGA,
    payload: {
      id,
      callback,
    },
  })
}

export const deleteHabit = id => {
  if (!id) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `id is falsy: ${id}`,
      },
    })
  }
  store.dispatch({
    type: DELETE_HABIT_SAGA,
    payload: id,
  })
}

export const fetchHabitDetailedData = id => {
  if (!id) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `id is falsy: ${id}`,
      },
    })
  }
  store.dispatch({
    type: FETCH_HABIT_DETAILED_DATA_SAGA,
    payload: id,
  })
}

export const renameHabit = (id, name) => {
  if (!name) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `name is falsy: ${name}`,
      },
    })
  }
  if (!id) {
    store.dispatch({
      type: ERROR,
      payload: {
        message: `id is falsy: ${id}`,
      },
    })
  }
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
