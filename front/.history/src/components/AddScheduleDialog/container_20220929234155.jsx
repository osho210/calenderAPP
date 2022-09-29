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
        dispatch(schedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    }
});

//propsを
const mergeProps = (stateProps, dispatchProps) => ({
    //引数の中値を展開
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);