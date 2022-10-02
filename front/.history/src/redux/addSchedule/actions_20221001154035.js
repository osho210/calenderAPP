//formの更新
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE"
// dialogをオープンさせる
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG"
// dialogをクローズさせる
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG"
//ヴァリデーションの追加
export const ADD_SCHEDULE_START_EDIT = "ADD_SCHEDULE_START_EDIT";

export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE"
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR";

//actions 
//更新処理はこれのみのためpayloadが必要 {[key] : value}
export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
});

export const addScheduleOpenDialog = () => ({
    type: ADD_SCHEDULE_OPEN_DIALOG
});

export const addScheduleCloseDialog = () => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG
});

export const addScheduleStartEdit = () => ({
    type: ADD_SCHEDULE_START_EDIT
})

export const schedulesAsyncFailure

export const schedulesResetError = ()=>({
    type: SCHEDULES_RESET_ERROR
})