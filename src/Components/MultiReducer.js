import React, { useReducer } from "react";

const MultiReducer = () => {
  let initialStatest = 0;

  function reducer(currstate, action) {
    // console.log(action);
    switch (action) {
      case "incre":
        return (currstate += 10);
      case "decre":
        return (currstate -= 10);
      default:
        return (currstate = 0);
    }
  }
  let [data, dispatch] = useReducer(reducer, initialStatest);
  let [data1, dispatch1] = useReducer(reducer, initialStatest);

  return (
    <div>
      <div>
        <h1>Multi reducer</h1>
        <h1>Value - {data} </h1>
        <button onClick={() => dispatch("incre")}>increment </button>
        <button onClick={() => dispatch("decre")}>decrement </button>
        <button onClick={() => dispatch("reset")}>reset </button>
      </div>
      <div>
        <h1>Multi reduce</h1>
        <h1>Value - {data1} </h1>
        <button onClick={() => dispatch1("incre")}>increment </button>
        <button onClick={() => dispatch1("decre")}>decrement </button>
        <button onClick={() => dispatch1("reset")}>reset </button>
      </div>
    </div>
  );
};

export default MultiReducer;
