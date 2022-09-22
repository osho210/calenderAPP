import { connect, Connect } from "react-redux";
import CalendarBoard from "./presentation";

const mapStateToProps = state => ({ calendar: state.calendar })
export default connect(mapStateToProps)(CalendarBoard)