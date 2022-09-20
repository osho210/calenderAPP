//reduxを使用できるようにする
import { connect } from "react-redux";
//関数の呼び出し
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";     //画面表示のコンポーネント

//countは取得位置
const mapStateProps = ({ count }) => ({ count });

//dispatchの処理が分からない
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
