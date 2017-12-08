import { call, put, takeLatest, takeEvery } from "redux-saga/effects"

import {
  fetchHabitPreviewDataApiCall,
  fetchHabitDetailedDataApiCall,
  createHabitApiCall,
  setTodayDoneApiCall,
  setTodayUndoneApiCall,
  deleteHabitApiCall,
} from "api"
import {
  CREATE_HABIT,
  CREATE_HABIT_ERROR,
  CREATE_HABIT_SAGA,
  DELETE_HABIT,
  DELETE_HABIT_ERROR,
  DELETE_HABIT_SAGA,
  FETCH_HABIT_DETAILED_DATA,
  FETCH_HABIT_DETAILED_DATA_ERROR,
  FETCH_HABIT_DETAILED_DATA_SAGA,
  FETCH_HABIT_PREVIEW_DATA,
  FETCH_HABIT_PREVIEW_DATA_ERROR,
  FETCH_HABIT_PREVIEW_DATA_SAGA,
  SET_TODAY_DONE,
  SET_TODAY_DONE_ERROR,
  SET_TODAY_DONE_SAGA,
  SET_TODAY_UNDONE,
  SET_TODAY_UNDONE_ERROR,
  SET_TODAY_UNDONE_SAGA,
} from "actions/actionTypes"

function* errorHandling(actionType, error) {
  yield put({
    type: actionType,
    message: error && error.message,
  })
}

function* fetchHabitDetailedData(action) {
  try {
    const responseJson = yield call(fetchHabitDetailedDataApiCall, action.payload)
    if (responseJson.success) {
      yield put({
        type: FETCH_HABIT_DETAILED_DATA,
        payload: responseJson.data,
      })
    } else {
      yield errorHandling(FETCH_HABIT_DETAILED_DATA_ERROR, responseJson.error)
    }
  } catch (error) {
    yield errorHandling(FETCH_HABIT_PREVIEW_DATA_ERROR, error)
  }
}

function* fetchHabitPreviewData(action) {
  try {
    const responseJson = yield call(fetchHabitPreviewDataApiCall)
    if (responseJson.success) {
      yield put({
        type: FETCH_HABIT_PREVIEW_DATA,
        payload: responseJson.data,
      })
    } else {
      yield errorHandling(FETCH_HABIT_PREVIEW_DATA_ERROR, responseJson.error)
    }
  } catch (error) {
    yield errorHandling(FETCH_HABIT_PREVIEW_DATA_ERROR, error)
  }
}

function* createHabit(action) {
  try {
    const responseJson = yield call(createHabitApiCall, action.payload)
    if (responseJson.success) {
      yield put({
        type: CREATE_HABIT,
        payload: {
          id: responseJson.id,
          name: action.payload,
        },
      })
    } else {
      yield errorHandling(CREATE_HABIT_ERROR, responseJson.error)
    }
  } catch (error) {
    yield errorHandling(CREATE_HABIT_ERROR, error)
  }
}

function* setTodayDone(action) {
  try {
    yield put({
      type: SET_TODAY_DONE,
      payload: action.payload,
    })
    const responseJson = yield call(setTodayDoneApiCall, action.payload)
    if (!responseJson.success) {
      yield errorHandling(SET_TODAY_DONE_ERROR, responseJson.error)
    }
    yield fetchHabitPreviewData()
  } catch (error) {
    yield errorHandling(SET_TODAY_DONE_ERROR, error)
    yield fetchHabitPreviewData()
  }
}

function* setTodayUndone(action) {
  try {
    yield put({
      type: SET_TODAY_UNDONE,
      payload: action.payload,
    })
    const responseJson = yield call(setTodayUndoneApiCall, action.payload)
    if (!responseJson.success) {
      yield errorHandling(SET_TODAY_UNDONE_ERROR, responseJson.error)
    }
    yield fetchHabitPreviewData()
  } catch (error) {
    yield errorHandling(SET_TODAY_UNDONE_ERROR, error)
    yield fetchHabitPreviewData()
  }
}

function* deleteHabit(action) {
  try {
    yield put({
      type: DELETE_HABIT,
      payload: action.payload,
    })
    const responseJson = yield call(deleteHabitApiCall, action.payload)
    if (!responseJson.success) {
      yield errorHandling(DELETE_HABIT_ERROR, responseJson.error)
      yield fetchHabitPreviewData()
    }
  } catch (error) {
    yield errorHandling(DELETE_HABIT_ERROR, error)
    yield fetchHabitPreviewData()
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_HABIT_PREVIEW_DATA_SAGA, fetchHabitPreviewData)
  yield takeLatest(FETCH_HABIT_DETAILED_DATA_SAGA, fetchHabitDetailedData)
  yield takeEvery(CREATE_HABIT_SAGA, createHabit)
  yield takeLatest(SET_TODAY_DONE_SAGA, setTodayDone)
  yield takeLatest(SET_TODAY_UNDONE_SAGA, setTodayUndone)
  yield takeEvery(DELETE_HABIT_SAGA, deleteHabit)
}
