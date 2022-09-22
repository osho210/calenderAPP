import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({ calendar: calendarReducer })

export default rootReducer