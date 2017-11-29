import store from "store"
import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

export const fetchTodayDoneForAll = () => {
  store.dispatch(dispatch => {
    sleepPromise(MOCK_API_LATENCY)
      .then(() => fetch("http://localhost:2379/fetchTodayDoneForAll", {
        method: "POST",
      }))
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          dispatch({
            type: "FETCH_TODAY_DONE_FOR_ALL",
            payload: responseJson.todayDones,
          })
        }
      })
      .catch(({ message }) => console.log(message))
  })
}

export const setTodayDone = id => {
  store.dispatch(dispatch => {
    sleepPromise(MOCK_API_LATENCY)
      .then(() => fetch("http://localhost:2379/setTodayDone", {
        method: "POST",
        body: "id=" + id,
      }))
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson)
        if (responseJson.success) {
          dispatch({
            type: "SET_TODAY_DONE",
            payload: {
              id: responseJson.id,
              timestamp: responseJson.timestamp,
            },
          })
        }
      })
      .catch(({message}) => console.log(message))
  })
}

export const setTodayUndone = id => {
  store.dispatch(dispatch => {
    sleepPromise(MOCK_API_LATENCY)
      .then(() => fetch("http://localhost:2379/setTodayUndone", {
        method: "POST",
        body: "id=" + id,
      }))
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson)
        if (responseJson.success) {
          dispatch({
            type: "SET_TODAY_UNDONE",
            payload: {
              id: responseJson.id,
              timestamp: responseJson.timestamp,
            },
          })
        }
      })
      .catch(({message}) => console.log(message))
  })
}
