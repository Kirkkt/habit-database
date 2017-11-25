import {combineReducers} from "redux"

import habits from "./habits"
import records from "./records"
import { reducer as reduxFormReducer } from "redux-form"

export default combineReducers({
  form: reduxFormReducer,
  habits,
  records,
});
