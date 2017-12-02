import store from "store"
import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

export const fetchTodayDoneForAll = () => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/fetchTodayDoneForAll", {
      method: "POST",
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.success) {
        store.dispatch({
          type: "FETCH_TODAY_DONE_FOR_ALL",
          payload: responseJson.todayDones,
        })
      }
    })
    .catch(({ message }) => console.log(message))
}

export const setTodayDone = id => {
  store.dispatch({
    type: "SET_TODAY_DONE",
    payload: {
      id: id,
      timestamp: Date.now(),
    },
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
