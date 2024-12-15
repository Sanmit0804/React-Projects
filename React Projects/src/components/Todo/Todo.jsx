import React, { useRef, useState } from "react";
import "./Todo.scss";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
  const inputRef = useRef();

  const handleSubmit = () => {
    if (task.trim() !== "") {
      if (isEditing) {
        const updatedTodos = todos.map((todo, index) => {
          return index === currentTodoIndex ? task : todo;
        });
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentTodoIndex(null);
      } else {
        setTodos([...todos, task]);
      }
      setTask("");
    }
  };

  const handleDelete = (index) => {
    // Create a new array without the deleted item
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    inputRef.current.focus();
    setTask(todos[index]);
    setIsEditing(true);
    setCurrentTodoIndex(index);
  };

  const indexUp = (index) => {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index - 1], updatedTodos[index]] = [
        updatedTodos[index],
        updatedTodos[index - 1],
      ];
      setTodos(updatedTodos);
    }
  };

  const indexDown = (index) => {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index + 1], updatedTodos[index]] = [
        updatedTodos[index],
        updatedTodos[index + 1],
      ];
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="todoContainer container">
      <input
        ref={inputRef}
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Enter task"
      />
      <button onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</button>

      <div className="output">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="todo"
            style={{ display: "flex", gap: "10px" }}
          >
            <p>{index + 1}</p>
            <p>{todo}</p>
            <div className="buttons">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => indexUp(index)}>↑</button>
              <button onClick={() => indexDown(index)}>↓</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
