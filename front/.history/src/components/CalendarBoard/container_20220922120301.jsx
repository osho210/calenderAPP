import { connect } from "react-redux";
import CalendarBoard from "./presentation";

const mapStateToProps = state => ({ calendar: state.calendar })
//conect(prpsの制御,stateの更新)
export default connect(mapStateToProps)(CalendarBoard)