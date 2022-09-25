import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({ calendar: state.calendar })

const mergeProps = stateProps => ({
    month:stateProps.cale
    calendar: createCalendar(stateProps.calendar)
})

//conect(prpsの制御 , stateの更新)
export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);