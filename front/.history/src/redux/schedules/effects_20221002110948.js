import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem,
    schedulesAsyncFailure
} from "./actions";
//getは処理 hostはパスが格格納されている
import { get, post, deleteRequest } from "../../services/api"
import { formatSchedule } from "../../services/schedule";

//初めの引数でリクエストの内容を決めている
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {

    //loading完了のaction
    dispatch(schedulesSetLoading());

    try {
        // awaitで受け取ることで非同期処理が終わるまでは処理をブロックしておく
        // 通信を含む構文は文章が正しくてもエラーを吐く恐れがある(サーバーが落ちるなど)

        const result = await get(`schedules`);
        

        // 文字列で受け取っていたデータを日付型に変更
        const formatedSchedule = result.map(r => formatSchedule(r));
        dispatch(schedulesFetchItem(formatedSchedule))
    } catch (err) {
        console.error(err)
        dispatch(schedulesAsyncFailure(err.message))
    }
}

export const asyncSchedulesAddItem = schedule => async dispatch => {
    dispatch(schedulesSetLoading());
    
    try {
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post("schedules", body)
        const newSchedule = formatSchedule(result);
        dispatch(schedulesAddItem(newSchedule))
    } catch (err) {
        console.error(err)
        dispatch(schedulesAsyncFailure(err.message))
    }
}


export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    //アプリケーションの状態ツリーを返却する
    const currentSchedules = getState().schedules.items
    try {
        // 非同期処理が完了するまでは待機させておく
        await deleteRequest(`schedules/${id}`)
        // 配列currentSchedules内の指定以外のidの値の取得
        const newSchedules = currentSchedules.filter(s => s.id != id);
        // フィルター適応後の値をredoxで再レンダリングさせる
        dispatch(schedulesAsyncFailure(err.message))
    } catch (err) {
        console.error(err)
    }
}



//try{エラーが起こりうる処理}catch(err){エラー処理}