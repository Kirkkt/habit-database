import store from "store"

export const createHabit = name => {
  store.dispatch({
    type: "CREATE_HABIT_SAGA",
    payload: name,
  })
}

// TODO: pagination
export const fetchHabitPreviewData = () => {
  store.dispatch({
    type: "FETCH_HABIT_PREVIEW_DATA_SAGA",
  })
}

export const setTodayDone = id => {
  store.dispatch({
    type: "SET_TODAY_DONE_SAGA",
    payload: id,
  })
}

export const setTodayUndone = id => {
  store.dispatch({
    type: "SET_TODAY_UNDONE_SAGA",
    payload: id,
  })
}

export const deleteHabit = id => {
  store.dispatch({
    type: "DELETE_HABIT_SAGA",
    payload: id,
  })
}
