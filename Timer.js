import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  const timerStart = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const timerStop = () => {
    clearInterval(intervalId.current);
  };

  const timerReset = () => {
    setCount(0);
    timerStop();
  };

  return (
    <div className="App">
      <h1>Timer: {count}</h1>
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Stop</button>
      <button onClick={timerReset}>Reset</button>
    </div>
  );
}
