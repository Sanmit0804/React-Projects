import React, { useState } from "react";
import "./Accordion.css";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId == selected ? null : getCurrentId);
    console.log(getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    if (multiple.includes(getCurrentId)) {
      setMultiple(multiple.filter((id) => id !== getCurrentId));
    } else {
      setMultiple([...multiple, getCurrentId]);
    }
  };

  return (
    <>
      <div className="accordion-container">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {!enableMultiSelection
            ? "Enable Multiple Selection"
            : "Disable Multiple Selection"}
        </button>
        <h2>This is Accordion</h2>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div className="data" key={index}>
              <div
                className="question"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(index)
                    : () => handleSingleSelection(index)
                }
              >
                {item.question}
              </div>

              {enableMultiSelection ? (
                multiple.includes(index) && (
                  <div className="answer">{item.answer}</div>
                )
              ) : selected === index ? (
                <div className="answer">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </>
  );
};

export default Accordion;
