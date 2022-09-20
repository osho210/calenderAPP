import { INCREMENT, DECREMENT } from "./constants";
//payloadは出力先の名前(数値型を実行)
export const increment = (payload) => ({
  type: INCREMENT,
  //p
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
