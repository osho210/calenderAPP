import { Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

const mapStateToProps = state=>
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})