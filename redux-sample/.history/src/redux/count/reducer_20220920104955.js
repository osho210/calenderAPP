// reducerはstateとActionから新しいstate
import { INCREMENT, DECREMENT } from "./constants";
const initState = 0;

//reducer は第1引数にstate , 第2引数にaction, importしてきたINCREMENTの中身を分割し使用している
export const count = (state = initState, { type, payload }) => {
  // type = 呼び出された型によって変わる(INCRE,DECRE)
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
