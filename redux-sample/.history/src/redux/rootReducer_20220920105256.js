import { combineReducers } from "redux";
//実行した処理を返却する
import { count } from "./count/reducer";

//storeを渡すときはcreatestoreで1つの値を渡す必要がある
const rootReducer = combineReducers({ count });

export default rootReducer
