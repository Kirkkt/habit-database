import { call, put, takeLatest } from "redux-saga/effects"
import { fetchHabitPreviewDataApiCall } from "api"

function* errorHandling(actionType, error) {
  yield put({
    type: actionType,
    message: error && error.message,
  })
}

function* fetchHabitPreviewData(action) {
  try {
    const responseJson = yield call(fetchHabitPreviewDataApiCall)
    if (responseJson.success) {
      yield put({
        type: "FETCH_HABIT_PREVIEW_DATA",
        payload: responseJson.data,
      })
    } else {
      yield errorHandling("FETCH_HABIT_PREVIEW_DATA_ERROR", responseJson.error)
    }
  } catch (error) {
    yield errorHandling("FETCH_HABIT_PREVIEW_DATA_ERROR", error)
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_HABIT_PREVIEW_DATA_SAGA", fetchHabitPreviewData)
}
