import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions"

const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

const calendarReducer = (state = init, action)=>{}