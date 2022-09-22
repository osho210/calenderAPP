import { connect } from "react-redux";
import CalendarBoard from "./presentation";

const mapStateToProps = state => ({ calendar: state.calendar })
//conect()
export default connect(mapStateToProps)(CalendarBoard)