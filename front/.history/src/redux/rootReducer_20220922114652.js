import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる
{[state][]}
const rootReducer = combineReducers({ calendar: calendarReducer })