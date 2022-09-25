import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";


//calenderプロパティが分からない
const mapStateToProps = state => ({ calender: state.calender })

//処理を振り分ける
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    }
})

//2つの引数で関数を実行して
const mergeProps = (stateProps, dispatchProps) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)