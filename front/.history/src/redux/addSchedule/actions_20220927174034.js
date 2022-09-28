//formの更新
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE"
// dialogをオープンさせる
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG"
// dialogをクローズさせる
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG"

//actions 
//更新処理はこれのみのため
export const addSchedulesetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
})

export const addScheduleOpenDialog = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
})

export const addScheduleCloseDialog = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
})
