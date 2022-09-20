//reduxを使用できるようにする
import { connect } from "react-redux";
//関数の呼び出し
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({count})=>({count});

const mapDispatchProps = dispatch =>({
    increment:count=>{
        dispatch(increment(count))
    },
    decrement: count => {
        dispatch(decrement(count))
    }
})


export default Counter;
