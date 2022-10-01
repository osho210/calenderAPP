import { isSomeDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
    // mapでdateにセットして、calendarの日付に一致するものだけをfilterでセット
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSomeDay(e.date, c))
    }))

export const formatSchedule = schedule=>({
    
})