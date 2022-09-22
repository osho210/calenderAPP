import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({ calendar: state.calendar })

const mergProps = stateProps => ({
    calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard)