import React,{useReducer} from 'react'

const CounterOne = () => {
    let initialStatest=0;

    function reducer(currstate,action){
        // console.log(action);
        switch(action){
            case "incre":
                return currstate+=10
            case "decre":
                return currstate-=10
            default:
                return currstate=0
        }
    }
    let [data,dispatch]=useReducer(reducer,initialStatest);

  return (

    <div>
        <h1>Counter 1</h1>
        <h1>Value - {data} </h1>
        <button onClick={()=>dispatch("incre")}>increment </button>
        <button onClick={()=>dispatch("decre")}>decrement </button>
        <button onClick={()=>dispatch("reset")}>reset </button>
    </div>

  )
}

export default CounterOne;