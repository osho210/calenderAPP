import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions"


const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

//ationが起きた場合に呼び出される
const calendarReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload
        default:
            return state
    }
}