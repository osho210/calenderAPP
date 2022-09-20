//reduxを使用できるようにする
import { connect } from "react-redux";
//関数の呼び出し
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({count})=>({count});



export default Counter;
