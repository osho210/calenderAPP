//typeの定数宣言
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH"

//actions   オブジェクトを返す関数(同じ構造の月と年)
export const calendarSetMonth = payload => ({
    type: CALENDAR_SET_MONTH,
    payload
})