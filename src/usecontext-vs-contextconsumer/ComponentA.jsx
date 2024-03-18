import { useContext } from "react";
import { MyContext } from "./store";

const CAN_ADD_TASK = true;

const ComponentA = () => {
  const context = useContext(MyContext);

  return (
    <div>
      {context.store.todos.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
      <button
        onClick={() => {
          if (CAN_ADD_TASK) {
            context.actions.addTask(
              "I am the task " + context.store.todos.length
            );
          }
        }}
      >
        + add
      </button>
    </div>
  );
};

export default ComponentA;
