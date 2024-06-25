import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const countIncrement = () => {
    if (count >= 20) {
      return;
    }
    count++;
    setCount(count);
  };
  const countDecrement = () => {
    if (count <= 0) {
      return;
    }
    count--;
    setCount(count);
  };
  const countReset = () => {
    count = 0;
    setCount(count);
  };

  return (
    <>
      <h1>Sanmit Suthar</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick={countIncrement}>Add Count</button>
      <span> </span>
      <button onClick={countDecrement}>Remove Count</button>
      <span> </span>
      <button onClick={countReset}>Reset</button>
    </>
  );
}

export default App;
