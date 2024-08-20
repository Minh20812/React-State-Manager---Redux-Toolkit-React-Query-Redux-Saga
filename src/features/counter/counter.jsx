import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const handleUpdate = () => {
    dispatch(incrementByAmount(Number(inputValue)));
    setInputValue(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
      e.preventDefault();
      return;
    }
    if (e.key === "Escape") {
      setInputValue(0);
      e.preventDefault();
      return;
    }
    if (e.key === "ArrowUp") {
      dispatch(increment());
      e.preventDefault();
      return;
    }
    if (e.key === "ArrowDown") {
      dispatch(decrement());
      e.preventDefault();
      return;
    }
  };

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
        <input
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <button
          onClick={handleUpdate}
          className=" border-2 border-gray-300 rounded-md px-2 py-1"
        >
          Update
        </button>
        <button
          onClick={() => dispatch(reset())}
          className=" border-2 border-gray-300 rounded-md px-2 py-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
