import React, { useEffect, useState } from "react";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchForPosts = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/todos/user/mrdoomus"
        );
        const todos = await response.json(); // Translating from JSON to JS
        setTodos(todos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchForPosts();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <p style={{ color: todo.done ? "green" : "red" }}>{todo.label}</p>
      ))}

      <button
        onClick={async () => {
          const oldTodosPlusNewTodo = [
            ...todos,
            { label: "Walk the dog", done: true },
          ];

          await fetch(
            "https://playground.4geeks.com/apis/fake/todos/user/mrdoomus",
            {
              method: "PUT",
              body: JSON.stringify(oldTodosPlusNewTodo), // Translating from JS to JSON
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }}
      >
        Click to add Task
      </button>
    </div>
  );
};

export default FetchTodos;
