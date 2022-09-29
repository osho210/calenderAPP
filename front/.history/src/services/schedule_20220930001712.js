import { isSomeDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
// mapで
    calendar.map(c => ({
        date: c,
        schedules: schedules.fillter(e => isSomeDay(e.date, c))
    }))