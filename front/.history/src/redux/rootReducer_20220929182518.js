import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReduser from "./addSchedule/reducer"
import schedulesReducer from "./schedules/reducer";

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addScedule: addScheduleReduser
    schedule:
})

export default rootReducer