import { Connect } from "react-redux";
import ErrorSnackbar from "./presentation";
import { schedulesResetError } from "../../redux/schedules/actions";

const mapStateToProps = state => ({ error: state.schedules.error })

const mapDispatchToProps = dispat