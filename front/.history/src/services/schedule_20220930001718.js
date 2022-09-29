import { isSomeDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
// mapでdate
    calendar.map(c => ({
        date: c,
        schedules: schedules.fillter(e => isSomeDay(e.date, c))
    }))