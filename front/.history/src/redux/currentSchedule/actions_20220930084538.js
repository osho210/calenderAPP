//constatnsの定義
export const CURRENT_SCHEDULE_SET_ITEM = "CURRENT_SCHEDULE_SET_ITEM"
export const CURRENT_SCHEDULE_OPEN_DIALOG = "CURRENT_SCHEDULE_OPEN_DIALOG"
export const CURRENT_SCHEDULE_CLOSE_DIALOG = "CURRENT_SCHEDULE_CLOSE_DIALOG"

// actions
//値をセットする必要があるためpayloadの引数が必要
export const currentScheduleSetItem = payload => ({
    type: CURRENT_SCHEDULE_SET_ITEM,
    payload
})


export const currentScheduleOpenDialog = payload => ({
    type: CURRENT_SCHEDULE_OPEN_DIALOG,
})

export const currentScheduleCloseDialog = () => ({
    type: CURRENT_SCHEDULE_CLOSE_DIALOG
})