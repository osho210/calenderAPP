import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions"


const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

//ationに変更が起きた場合に処理が実行される
const calendarReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload
        default:
            return state
    }
}