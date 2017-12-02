import {combineReducers} from "redux"

import habitPreviewData from "./habitPreviewData"
import habitDetailedData from "./habitDetailedData"
import { reducer as reduxFormReducer } from "redux-form"

export default combineReducers({
  form: reduxFormReducer,
  habitPreviewData,
  habitDetailedData,
});
