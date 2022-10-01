import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import 

//取得したstateのスケジュールを取得
const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog())
    }
})

//connectでstateを渡しているのはAddScheduleDialog
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog)