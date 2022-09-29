import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer"

//reducerを1つにまとめる   { [state名]: [reducer] }
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addScedule: addScheduleReducer
})

export default rootReducer