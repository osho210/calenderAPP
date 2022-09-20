import { combineReducers } from "redux";
import { count } from "./count/reducer";

//現時点で
const rootReducer = combineReducers({ count });
export default rootReducer
