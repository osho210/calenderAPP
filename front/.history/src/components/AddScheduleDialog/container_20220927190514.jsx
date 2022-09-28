// // presentationのデータをcontainerので処理を行っている
// import AddScheduleDialog from "./presentation";
// import { connect } from "react-redux";
// import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

// //presentationからもらった引数で値の更新
// const mapStateToProps = state => ({ schedule: state.addSceduleDialog });
// const mapDispatchToProps = dispatch => ({
//     closeDialog: () => {
//         dispatch(addScheduleCloseDialog());
//     }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);

import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

// ==========ここから追加する==========
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";
// ==========ここまで追加する==========

const mapStateToProps = state => ({ schedule: state.addSchedule });

// ==========ここから追加する==========
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    }
});
// ==========ここまで追加する==========

// mapDispatchToPropsを追加する
export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);