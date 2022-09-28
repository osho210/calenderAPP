import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapDispatchToProps = dispatch=>({
    oppenAddScheduleDialog:()=>{
        dispatch(add)
    }
})

const mapStateToProps = state => ({ calendar: state.calendar })

const mergeProps = (stateProps, dispatchProps) => ({
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})

//conect(prpsの制御 , stateの更新)
export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);