import './App.css';
import CounterOne from './Components/CounterOne';
import {CounterTwo}  from './Components/CounterTwo';
import MultiReducer from './Components/MultiReducer';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"blue",textDecoration:"underline"}}>useReducer Hook</h1>
      <CounterOne />
      <CounterTwo />
      <MultiReducer />
    </div>
  );
}

export default App;
