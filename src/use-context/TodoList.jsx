// TodoList.js
import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const { todos, fetchTodos, addTodo } = useContext(TodoContext);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTodoText,
            completed: false,
          }),
        }
      );
      const data = await response.json();
      addTodo(data);
      setNewTodoText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={handleChange}
          placeholder="Enter new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
