import { Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

//
const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})