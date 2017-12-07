import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

// TODO: extract localhost to a common place?
export function* fetchHabitPreviewDataApiCall() {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    "http://localhost:2379/fetchHabitPreviewData",
    {
      method: "POST",
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

export function* createHabitApiCall(name) {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    "http://localhost:2379/createHabit",
    {
      method: "POST",
      body: "name=" + name,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

export function* setTodayDoneApiCall(id) {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    "http://localhost:2379/setTodayDone",
    {
      method: "POST",
      body: "id=" + id,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

export function* setTodayUndoneApiCall(id) {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    "http://localhost:2379/setTodayUndone",
    {
      method: "POST",
      body: "id=" + id,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

export function* deleteHabitApiCall(id) {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    "http://localhost:2379/deleteHabit",
    {
      method: "POST",
      body: "id=" + id,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

  // store.dispatch({
  //   type: "SET_TODAY_DONE",
  //   payload: id,
  // })
  // sleepPromise(MOCK_API_LATENCY)
  //   .then(() => fetch("http://localhost:2379/setTodayDone", {
  //     method: "POST",
  //     body: "id=" + id,
  //   }))
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     if (!responseJson.success) {
  //       // TODO: error handling
  //     } else {
  //       fetchHabitPreviewData()
  //     }
  //   })
  //   .catch(({message}) => console.log(message))
