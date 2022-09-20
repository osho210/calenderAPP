//action

import { INCREMENT, DECREMENT } from "./constants";
//payloadは出力先の名前(数値型を実行)
export const increment = (payload) => ({
  type: INCREMENT,
  //paylodaは変更される値が格納されている
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
