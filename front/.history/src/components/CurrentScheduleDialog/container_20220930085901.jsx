import { Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

//取得したstateを反映させる認識
const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})