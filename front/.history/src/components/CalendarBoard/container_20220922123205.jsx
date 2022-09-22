import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({ calendar: state.calendar })
//conect(prpsの制御 , stateの更新)
export default connect(mapStateToProps)(CalendarBoard);

const mergProps = stateProps => ({
    calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps)