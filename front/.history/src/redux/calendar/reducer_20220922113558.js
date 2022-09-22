import dayjs from "dayjs";

const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1
}

const calendarReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload
        default:
            return state
    }
}