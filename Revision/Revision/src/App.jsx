import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour12: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="container">
      <h1 className="clock">{formatTime(time)}</h1>
    </div>
  );
}

export default App;
