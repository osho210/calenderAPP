// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
    addScheduleCloseDialog,
    addScheduleSetValue,
    addScheduleStartEdit
} from "../../redux/addSchedule/actions";

//日程のreduxの参照
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";
import { isCloseDialog } from "../../services/schedule";
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
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    },
    setIsEditStart: () => {
        dispatch(addScheduleStartEdit())
    }

});

//ここまでは読めている
//propsをpresentationに渡す
const mergeProps = (stateProps, dispatchProps) => {
    const {
        schedule: { form: schedule }
    } = stateProps;
    const { saveSchedule, closeDialog } = dispatchProps;

    return {
        ...stateProps,
        ...dispatchProps,
        saveSchedule: () => {
            saveSchedule(schedule);
        },
        closeDialog: () => {
            if (isCloseDialog(schedule)) {
                closeDialog();
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);


//入力値のカラチが取得できていない
// ヴァリデーションの作成はできているが画面上に表示できていない
// errorの作成処理のエラーがブラックボックス化している