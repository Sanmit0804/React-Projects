import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";

function App() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <h2>count: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment + </button> 
       &nbsp;
       &nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement - </button>
    </>
  );
}

export default App;
