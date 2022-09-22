import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる   { [state名]: [reducer] }
export default const rootReducer = combineReducers({ calendar: calendarReducer })