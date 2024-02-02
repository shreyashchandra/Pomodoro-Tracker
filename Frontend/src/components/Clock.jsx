import { useState } from "react";
import { useRef } from "react";

const Clock = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const inputTime = useRef();

  function startTime() {
    let i = parseInt(inputTime.current.value, 10) || 25;

    if (isNaN(i) || i <= 0) {
      alert("Please enter a valid positive number");
      return;
    }

    let intervalId = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 9) {
          setMinute((prevMinute) => prevMinute + 1);
          return 0;
        } else {
          return prevSecond + 1;
        }
      });
    }, 1000);

    // Stop the interval after the specified time
    setTimeout(() => {
      clearInterval(intervalId);
    }, i * 1000);
  }

  return (
    <div>
      <h1>
        {minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
      </h1>
      <input type="number" placeholder="Enter the time" ref={inputTime} />
      <button onClick={startTime}>Start</button>
    </div>
  );
};

export default Clock;
