import React, { useReducer } from "react";

export const CounterTwo = () => {
  let initialStatest = {
    first_value: 0,
    last_value: 1000,
  };

  function reducer(current, action) {
    console.log(action);
    switch (action.type) {
      case "first-incre":
        return { ...current, first_value: current.first_value + action.value };
      case "first-decre":
        return { ...current, first_value: current.first_value + action.value };
      case "first-reset":
        return { ...current, first_value: action.value };

      case "last-incre":
        return { ...current, last_value: current.last_value + 10 };
      case "last-decre":
        return { ...current, last_value: current.last_value - 10 };
      case "last-reset":
        return { ...current, last_value: 1000 };
    }
  }
  let [data, dispatch] = useReducer(reducer, initialStatest);

  console.log("data", data);
  console.log("initial", initialStatest);

  return (
    <div>
      <div>
        <h1>Counter 2</h1>
        <h1>First - {data.first_value}</h1>
        <button onClick={() => dispatch({ type: "first-incre", value: 1 })}>
          1st Increment+1
        </button>
        <button onClick={() => dispatch({ type: "first-decre", value: -1 })}>
          1st Decrement-1
        </button>
        <button onClick={() => dispatch({ type: "first-incre", value: 10 })}>
          1st Increment+10
        </button>
        <button onClick={() => dispatch({ type: "first-decre", value: -10 })}>
          1st Decrement-10
        </button>
        <button onClick={() => dispatch({ type: "first-reset", value: 0 })}>
          1st Reset to 0
        </button>
      </div>
      <div>
        <h1>Counter 2</h1>
        <h1>First - {data.last_value}</h1>
        <button onClick={() => dispatch({ type: "last-incre"})}>2nd Increment</button>
        <button onClick={() => dispatch({ type: "last-decre"})}>2nd Decrement</button>
        <button onClick={() => dispatch({ type: "last-reset"})}>2nd Reset</button>
      </div>
    </div>
  );
};
