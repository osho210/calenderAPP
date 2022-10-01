import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =({month,year})=>async dispatch=>{
    dispatch(schedulesSetLoading());
    const result = await get(`schedules?month=${month}&year=`)
}