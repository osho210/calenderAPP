import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

//reducerを
const rootReducer = combineReducers({ calendar: calendarReducer })