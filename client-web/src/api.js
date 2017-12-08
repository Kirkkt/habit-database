import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

const getUrl = path => `http://localhost:2379/${path}`

export function* fetchHabitDetailedDataApiCall(id) {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    getUrl("fetchHabitDetailedData"),
    {
      method: "POST",
      body: "id=" + id,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}

export function* fetchHabitPreviewDataApiCall() {
  yield sleepPromise(MOCK_API_LATENCY)
  const response = yield fetch(
    getUrl("fetchHabitPreviewData"),
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
    getUrl("createHabit"),
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
    getUrl("setTodayDone"),
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
    getUrl("setTodayUndone"),
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
    getUrl("deleteHabit"),
    {
      method: "POST",
      body: "id=" + id,
    }
  )
  const responseJson = yield response.json()
  return responseJson
}
