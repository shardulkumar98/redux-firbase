import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { useAppDispatch, useAppSelector } from "./redux/hooks";
// import { increment, decrement } from "./redux/slices/counterSlice";
import Login from "./pages/login";

function App() {
  // const count = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Counter is {count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header> */}
      <section className="App-header">
        <Login />
      </section>
    </div>
  );
}

export default App;
