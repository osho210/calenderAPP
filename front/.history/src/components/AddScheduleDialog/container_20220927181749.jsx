// presentationのデータをcontainerので処理を行っている
import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
const mapStateToProps = state => ({sched});
export default connect(mapStateToProps)(AddScheduleDialog);