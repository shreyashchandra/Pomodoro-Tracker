import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [count, setCount] = useState(0);

  function handller() {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(<Clock />);
    }
    return arr;
  }

  return (
    <>
      <div>
        <h1>Pomodoro Tracker</h1>
        <input type="number" onChange={(e) => setCount(e.target.value)} />
        {handller()}
      </div>
    </>
  );
}

export default App;
