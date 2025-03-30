import React, { useState } from "react";

const CheckBoxQue = () => {
  const [tasks, setTasks] = useState(["Play games", "Play Video Game", "Read book"]);
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));

    setCheckedTasks((prev) => {
      const newChecked = { ...prev };
      delete newChecked[index];
      return newChecked;
    });
  };

  const handleCheck = (index) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="card">
        <div className="card-header">Checkbox Question</div>
        <div className="card-body">
          {tasks.length > 0 ? (
            tasks.map((item, index) => (
              <div key={index} className="d-flex gap-2 user-select-none">
                <input
                  type="checkbox"
                  id={item}
                  checked={checkedTasks[index] || false}
                  onChange={() => handleCheck(index)}
                />
                <label htmlFor={item}>{item}</label>

                {checkedTasks[index] && (
                  <span className="cursor-pointer" onClick={() => handleDelete(index)}>❌</span>
                )}
              </div>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxQue;
