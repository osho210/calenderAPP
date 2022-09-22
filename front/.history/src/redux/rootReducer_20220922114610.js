import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる
const rootReducers = combineReducers({ calendar: calendarReducer })