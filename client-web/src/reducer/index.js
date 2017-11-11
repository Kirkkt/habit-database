import {combineReducers} from "redux"

import first from "./first"
import { reducer as reduxFormReducer } from "redux-form"


export default combineReducers({
  form: reduxFormReducer,
  first,
});
