// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
    addScheduleCloseDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

//export const addScheduleSetValue = payload => ({
// type: ADD_SCHEDULE_SET_VALUE,
//     payload
// })

//presentationからもらった引数で値の更新
const mapStateToProps = state => ({ schedule: state.addScedule });

const mapDispatchToProps = dispatch => ({
    oppenAddSchedule: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScheduleDialog);