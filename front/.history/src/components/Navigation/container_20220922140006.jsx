import Navigation from "./presentation";
import { connect } from "react-redux";

//返り値を返却
const mapStateToProps = state => ({})
//処理を振り分ける
const mapDispatchToProps = dispatch => ({})
//2つの引数から
const mergeProps = (stateProps, dispatchProps) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)