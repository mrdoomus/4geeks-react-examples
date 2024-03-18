import React, { useState, useContext } from "react";

/*
  This Will be the global state of the application
  and here we are initializing it with some todo's
*/
export const MyContext = React.createContext(null);

/*
  This will be the structure of the store that will be in the context
  it contains all the data and the actions that will be used to update the data
*/
const store = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      todos: ["Make the bed", "Take out the trash"],
    },
    actions: {
      // Use getActions to call a function within a fuction
      addTask: (title) => {
        setStore({
          ...store,
          todos: [...getStore().todos, title],
        });
      },
    },
  };
};

/*
  Create a "Provider" that uses the Context
*/
export const ThemeProvider = (props) => {
  /*
	  The state is created with the store function
	*/
  const [state, setState] = useState(
    store({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: Object.assign(state.store, updatedStore),
          actions: { ...state.actions },
        }),
    })
  );

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

/*
  On any component, whenever you want to have use the store,
  you have to start by waping everything inside a Consumer tag
*/
export const TodoList = () => {
  const context = useContext(MyContext);
  return (
    <div>
      {context.store.todos.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
      <button
        onClick={() =>
          context.actions.addTask("I am the task " + context.store.todos.length)
        }
      >
        + add
      </button>
    </div>
  );
};
