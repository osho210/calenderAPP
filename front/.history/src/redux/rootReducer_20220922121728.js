import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを1つにまとめる   { [state名]: [reducer] }
export defaconst rootReducer = combineReducers({ calendar: calendarReducer })