import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";


//dispatchで必要なmapStatePropsを実装
const mapStateToProps = state => ({ calendar: state.calendar });

//actionのデータをreducerを介してstoreに渡すことがdispatch
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    }
})

//2つの引数で関数を実行して
const mergeProps = (stateProps, dispatchProps) => ({
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);