import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

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
