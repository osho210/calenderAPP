import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapDispatchToProps = dispatch => ({
    //プロパティに値を格納しているため指定しなくてよい
    openAddScheduleDialog: () => {
        dispatch(addScheduleOpenDialog())
    }
})

const mapStateToProps = state => ({ calendar: state.calendar })

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})

//conect(prpsの制御 , stateの更新)
export default connect(
    mapDispatchToProps, 
    mapStateToProps, 
    mergeProps
    )(CalendarBoard);