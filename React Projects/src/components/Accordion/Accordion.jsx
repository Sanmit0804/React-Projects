import React, { useState } from "react";
import data from "./data.js";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  // Single Selection Handler
  const handleSingleSelection = (getCurrentId) => {
    if (selected === getCurrentId) {
      setSelected(null); // Close if already open
    } else {
      setSelected(getCurrentId); // Open selected item
    }
  };

  // Multi-Selection Handler
  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId); // Add to selection
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1); // Remove from selection
    }
    setMultiSelected(cpyMultiple);
  };

  return (
    <div className="accordion-container">
      <button
        className="multi-selector"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordion-item" key={item.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className={`accordion-title ${
                  enableMultiSelection
                    ? multiSelected.includes(item.id)
                      ? "active"
                      : ""
                    : selected === item.id
                    ? "active"
                    : ""
                }`}
              >
                <h3>{item.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multiSelected.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
              </div>

              {/* Conditional rendering based on multi/single selection */}
              {enableMultiSelection
                ? multiSelected.includes(item.id) && (
                    <div className="accordion-content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="accordion-content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
