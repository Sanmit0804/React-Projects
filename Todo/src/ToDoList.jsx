import React, { useRef, useState, useEffect } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if(newTask.trim() !== "")
    {
      setTasks(t=>[...t, newTask]);
      setNewTask("");
      inputRef.current.focus();
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks.splice(index, 1); // Remove one item at the specified index
    setTasks(updatedTasks); // Update the state with the new array
  };

  function moveTaskUp(index) {
    if(index > 0)
    {
      const updatedTasks = [...tasks];
      [updatedTasks[index] , updatedTasks[index-1]] =[updatedTasks[index-1] , updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1)
      {
        const updatedTasks = [...tasks];
        [updatedTasks[index] , updatedTasks[index+1]] =[updatedTasks[index+1] , updatedTasks[index]];
        setTasks(updatedTasks);
      }
  }

  function handleKeyDown(event){
    if(event.key == "Enter")
    {
      addTask();
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>ToDo List</h1>
        <div className="input">
            <input type="text" placeholder="Enter a task..!" value={newTask} ref={inputRef} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button className="add-btn" onClick={addTask}>Add Task</button>
        </div>
        <div className="output">
            <ol>
                {tasks.map((task, index)=> 
                    <li key={index}>
                        <span className="text">{index+1}.  {task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>🔝</button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}>🔻</button>
                    </li>
                )}
            </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
