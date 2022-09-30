import { connect, Connect } from "react-redux";
import AddScheduleDialog from "../AddScheduleDialog/presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

//取得したstateのスケジュールを取得
const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog)
    }
})

//connectでstateを渡しているのは
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog)