// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {add}
//presentationからもらった引数で値の更新
const mapStateToProps = state => ({ schedule: state.schedule });
export default connect(mapStateToProps)(AddScheduleDialog);