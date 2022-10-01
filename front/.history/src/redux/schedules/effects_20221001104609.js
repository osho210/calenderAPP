import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem
} from "./actions";
//getは処理 hostは
import { get, post } from "../../services/api"
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

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