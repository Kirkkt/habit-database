import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./sagas"
import reducer from "./reducer"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store
