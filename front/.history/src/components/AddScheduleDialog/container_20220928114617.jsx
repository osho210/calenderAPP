// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

//presentationからもらった引数で値の更新
const mapStateToProps = state => ({ schedule: state.addScedule });
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog);