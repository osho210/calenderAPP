import { isSomeDay } from "./calendar";
import dayjs from "dayjs";

export const setSchedules = (calendar, schedules) =>
    // mapでdateにセットして、calendarの日付に一致するものだけをfilterでセット
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSomeDay(e.date, c))
    }))

export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)
})

export const isCloseDialog = schedule => {
    const message = "保存されていない変更を破棄しますか？";
    return isScheduleEmpty(schedule || confirm(message))
}

//タイトル・場所・説明文すべて未入力でログを閉じる場合に処理を実行
const isScheduleEmpty = schedule =>
    !schedule.title && schedule.description && !schedule.location