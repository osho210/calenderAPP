import dayjs from "dayjs";
import { CALENDAR_SET_MONTH, calendarSetMonth } from "./actions"

const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}
const action = calendarSetMonth

const calendarReducer = (state = init, action = action) => {
    const { type, payload } = action
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload
        default:
            return state
    }
}