import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる
{[state名][]}
const rootReducer = combineReducers({ calendar: calendarReducer })