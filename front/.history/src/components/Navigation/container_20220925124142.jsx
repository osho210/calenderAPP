import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";


//返り値を返却
const mapStateToProps = state => ({calender})
//処理を振り分ける
const mapDispatchToProps = dispatch => ({})
//2つの引数で関数を実行して
const mergeProps = (stateProps, dispatchProps) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)