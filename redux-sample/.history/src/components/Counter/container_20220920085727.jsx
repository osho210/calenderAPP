//reduxを使用できるようにする
import { connect } from "react-redux";
//関数の呼び出し
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

//countはどこから
const mapStateProps = ({ count }) => ({ count });

//同じ意味(ES6を使用)
// const mapStateProps = (state)=>{
//     return {count:state.count}
// }


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
