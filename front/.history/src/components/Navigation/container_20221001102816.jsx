import Navigation from "./presentation";
import { connect } from "react-redux";
import { formatMonth, getMonth, getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";


//dispatchで必要なmapStatePropsを実装
const mapStateToProps = state => ({ calendar: state.calendar });

//actionのデータをreducerを介してstoreに渡すことがdispatch
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month))
    }
})

//2つの引数で関数を実行して
const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
        dispatchProps.fetchItem(nextMonth);
    },

    setPreviousMonth: () => {
        console.log("test")
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
        dispatchProps.fetchItem(pre);
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj)
        dispatchProps.setMonth(month)
    }
});



export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);