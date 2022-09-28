import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReduser from "./addSchedule/reducer"

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({
     calendar: calendarReducer,
    adds
    })

export default rootReducer