import React, { useContext } from "react";
import { CountContext } from "./CountContext";

function CountA() {
  const context = useContext(CountContext);

  return (
    <div>
      <h1>{context.count}</h1>
      <button onClick={context.incrementCount}>Click me to increment</button>
    </div>
  );
}

export default CountA;
