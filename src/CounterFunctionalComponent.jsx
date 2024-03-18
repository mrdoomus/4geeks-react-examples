import { useState, useEffect } from "react";

// useState - create and modify an internal state, this means, data inside of the component
// useEffect - make some variables be watched, when they are modified, some logic gets triggered

const ParentComponent = () => {
  // const [value, setValue] = useState(initialSate)
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // useEffect(logic that wants to run when the watched variables change, [watched variables])

  const sayHi = () => {
    console.log("Hi");
  };

  useEffect(sayHi, []); // Everytime we increment count, 'Hi' is going to be logged

  return (
    <div>
      Count: {count}
      <div>
        <button onClick={incrementCount}>Click me to increment Count</button>
      </div>
    </div>
  );
};

export default ParentComponent;
