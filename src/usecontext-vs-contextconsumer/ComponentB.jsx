import { MyContext } from "./store";

const CAN_ADD_TASK = false;

const ComponentB = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
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
      )}
    </MyContext.Consumer>
  );
};

export default ComponentB;
