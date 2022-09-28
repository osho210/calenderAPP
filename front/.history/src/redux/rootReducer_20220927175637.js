import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import {}

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({ calendar: calendarReducer })

export default rootReducer