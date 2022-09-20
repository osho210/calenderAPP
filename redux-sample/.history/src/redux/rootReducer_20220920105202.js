import { combineReducers } from "redux";
//実行した処理を返却する
import { count } from "./count/reducer";

//現時点でreducerが1つしか作成されていないのでcount1つのみ
const rootReducer = combineReducers({ count });

export default rootReducer
