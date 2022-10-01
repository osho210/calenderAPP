import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects";

//取得したstateのスケジュールを取得
const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog())
    },
    deleteItem: id => {
        dispatch(asyncSchedulesDeleteItem(id))
        dispatch(currentScheduleCloseDialog())
    }
})

const mergeProps = (stateProps,dispatchProps)=>({
    ...stateProps,
    ...dispatchProps
})

//connectでstateを渡しているのはAddScheduleDialog
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog)