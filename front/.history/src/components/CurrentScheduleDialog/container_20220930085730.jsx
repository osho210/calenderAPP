import { Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

const mapDispatchTo = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})