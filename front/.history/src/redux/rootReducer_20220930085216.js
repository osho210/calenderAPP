import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReduser from "./addSchedule/reducer"
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addScedule: addScheduleReduser,
    schedules: schedulesReducer
})

export default rootReducer