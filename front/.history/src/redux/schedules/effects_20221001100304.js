import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

//引数が2セットあるものの書き方が分からない
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    dispatch(schedulesSetLoading());
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule))
}