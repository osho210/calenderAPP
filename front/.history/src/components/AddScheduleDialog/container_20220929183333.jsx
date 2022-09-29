// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
    addScheduleCloseDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

//日程のreduxの参照
import { schedulesAddItem } from "../../redux/schedules/actions";
//presentationからもらった引数で値の更新
const mapStateToProps = state => ({ schedule: state.addScedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },
    saveSchedule: schedule => {
        dispatch(schedulesAddItem(schedule))
        dispatch(addScheduleCloseDialog())
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
...stateProp
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog);