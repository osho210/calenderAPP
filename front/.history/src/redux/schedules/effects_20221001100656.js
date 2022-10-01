import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

//初めの引数でリクエストの内容を決めている
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    
    //loading完了のaction
    dispatch(schedulesSetLoading());

    //
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule))
}