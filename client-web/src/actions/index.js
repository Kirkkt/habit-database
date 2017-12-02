import store from "store"
import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

export const fetchHabitDetailedData = id => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/fetchHabitDetailedData", {
      method: "POST",
      param: "id=" + id,
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.success) {
        store.dispatch({
          type: "FETCH_HABITS",
          payload: responseJson.habits,
        })
      }
    })
    .catch(({ message }) => console.log(message))
}

export const createHabit = name => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/createHabit", {
      method: "POST",
      // TODO: escape special charactors like ? and &
      body: "name=" + name,
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.success) {
        store.dispatch({
          type: "CREATE_HABIT",
          payload: {
            id: responseJson.id,
            name: name,
          },
        })
      }
    })
    .catch(({message}) => console.log(message))
}

// TODO: pagination
export const fetchHabitPreviewData = () => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/fetchHabitPreviewData", {
      method: 'POST',
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.success) {
        store.dispatch({
          type: "FETCH_HABIT_PREVIEW_DATA",
          payload: responseJson.data,
        })
      }
    })
    .catch(({ message }) => console.log(message))
}

export const setTodayDone = id => {
  store.dispatch({
    type: "SET_TODAY_DONE",
    payload: id,
  })
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/setTodayDone", {
      method: "POST",
      body: "id=" + id,
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (!responseJson.success) {
        // TODO: error handling
      }
    })
    .catch(({message}) => console.log(message))
}


export const setTodayUndone = id => {
  store.dispatch({
    type: "SET_TODAY_UNDONE",
    payload: {
      id: id,
      timestamp: Date.now(),
    },
  })
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/setTodayUndone", {
      method: "POST",
      body: "id=" + id,
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (!responseJson.success) {
        // TODO: error handling
      }
    })
    .catch(({message}) => console.log(message))
}

export const deleteHabit = id => {
  fetch("http://localhost:2379/deleteHabit", {
    method: 'POST',
    body: "id=" + id
  })
  .then(response => response.json())
  .then(responseJson => {
    if (responseJson.success) {
      store.dispatch({
        type: "DELETE_HABIT",
        payload: id,
      })
    }
  })
  .catch(({message}) => console.log(message))
}
