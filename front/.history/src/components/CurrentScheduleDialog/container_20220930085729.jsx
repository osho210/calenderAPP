import { Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

const mapDispatchToro = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})