import { useState, useEffect } from "react";
/* This timer is purely visual and does not affect the game's logic, 
the actual game time will be handled by the backend.
*/
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  // Format time into mm:ss:ms
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = milliseconds % 1000;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(ms).padStart(3, "0")}`;
  };

  return <div className="monospace">{formatTime(time)}</div>;
};

export default Timer;
