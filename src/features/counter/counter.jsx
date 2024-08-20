import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" flex gap-2 justify-center items-center h-screen">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className=" border-2 border-gray-300 rounded-md px-2 py-1"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className=" border-2 border-gray-300 rounded-md px-2 py-1"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
