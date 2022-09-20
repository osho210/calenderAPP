import { combineReducers } from "redux";
import { count } from "./count/reducer";

//現時点でreducerが1つしか作成されていないのでcount一つのみ
const rootReducer = combineReducers({ count });
export default rootReducer
