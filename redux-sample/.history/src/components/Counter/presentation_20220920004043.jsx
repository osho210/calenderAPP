import React from "react";

const Counter = ({count,increment,decrement}) => {
    <>
    <div>{count}</div>
    <button onClick={()=>increment(1)}>+</button>
    <button></button>
    </>
}

export default Counter;
