import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =({month,year})=>async dispatch=>{
    dispatch(schedulesSetLoading());
    
}