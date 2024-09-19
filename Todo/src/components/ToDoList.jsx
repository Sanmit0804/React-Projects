import React, { useState } from "react";
import "./ToDoList.css"; 

const ToDoList = () => {
  const [tasks, setTasks] = useState(["task one", "task two", "task three"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const handleMoveTaskUp = (index) => {
    if (index > 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
      setTasks([...tasks]);
    }
  };

  const handleMoveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
      setTasks([...tasks]);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">ToDo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Enter your task..."
          value={newTask}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button onClick={handleAddTask} className="todo-add-button">
          Add ➕
        </button>
      </div>
      <div className="todo-task-list">
        <ol>
          {tasks.map((text, index) => {
            return (
              <li key={index} className="todo-task-item">
                <span>{text}</span>
                <div className="todo-task-buttons">
                  <button onClick={() => handleDeleteTask(index)} className="todo-delete-button">
                    ❌
                  </button>
                  <button onClick={() => handleMoveTaskUp(index)} className="todo-move-up-button">
                    🔝
                  </button>
                  <button onClick={() => handleMoveTaskDown(index)} className="todo-move-down-button">
                    🔻
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
