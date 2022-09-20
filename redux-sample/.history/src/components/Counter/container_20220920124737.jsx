//reduxを使用できるようにする
import { connect } from "react-redux";  //reactの呼び出し
import Counter from "./presentation";     //画面表示の関数の呼び出し
import { increment, decrement } from "../../redux/count/actions";
//storeからどのstateを引っ張てくるか
const mapStateProps = ({ count }) => ({ count });

//dispatcherをpropsに渡すか定義する
const mapDispatchProps = dispatch => ({
    increment: count => {
        dispatch(increment(count))
    },
    decrement: count => {
        dispatch(decrement(count))
    }
})


export default connect(
    mapStateProps,
    mapDispatchProps
)(Counter);
