import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる
{[]}
const rootReducer = combineReducers({ calendar: calendarReducer })