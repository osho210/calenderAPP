import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ 
    calendar: state.calendar ,
    schedules:state.sch
})

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: date => {
        dispatch(addScheduleOpenDialog());
        //addScheduleSetValueの関数が利用できていなかった
        dispatch(addScheduleSetValue({ date: date }));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})

//conect(prpsの制御 , stateの更新)
//connectで渡す順番にも順序が
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CalendarBoard);