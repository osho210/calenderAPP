import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem
} from "./actions";
//getは処理 hostはパスが格格納されている
import { get, post, deleteRequest } from "../../services/api"
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesAddItem = schedule => async dispatch => {
    dispatch(schedulesSetLoading());

    try {
        const result = await get(`schedules?month=${month}&year=${year}`);
        const formatedSchedule = result.map(r => formatSchedule(r));
        dispatch(schedulesFetchItem(formatedSchedule))
    }

    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body)
    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule))
}

//初めの引数でリクエストの内容を決めている
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {

    //loading完了のaction
    dispatch(schedulesSetLoading());

    //指定された月の予定を取得
    // awaitで受け取ることで非同期勝利が終わるまでは処理をブロックしておく
    const result = await get(`schedules?month=${month}&year=${year}`);

    // 文字列で受け取っていたデータを日付型に変更
    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule))
}

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    //アプリケーションの状態ツリーを返却する
    const currentSchedules = getState().schedules.items
    // 非同期処理が完了するまでは待機させておく
    await deleteRequest(`schedules/${id}`)
    // 配列currentSchedules内の指定以外のidの値の取得
    const newSchedules = currentSchedules.filter(s => s.id != id);
    // フィルター適応後の値をredoxで再レンダリングさせる
    dispatch(schedulesDeleteItem(newSchedules))
}