import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  // Array of accordion items with title and content
  const accordionData = [
    { id: 1, title: "Accordion 1", detail: "This is detail for Accordion 1" },
    { id: 2, title: "Accordion 2", detail: "This is detail for Accordion 2" },
    { id: 3, title: "Accordion 3", detail: "This is detail for Accordion 3" },
    { id: 4, title: "Accordion 4", detail: "This is detail for Accordion 4" },
  ];

  // State to manage the visibility of each accordion's detail
  const [visibleIndex, setVisibleIndex] = useState(null);

  // Toggle visibility of the detail section
  const toggleDetail = (index) => {
    if (visibleIndex === index) {
      setVisibleIndex(null); // Close the clicked item if it's already open
    } else {
      setVisibleIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div className="main" onClick={() => toggleDetail(index)}>
            {item.title}
          </div>
          <div className={`detail ${visibleIndex === index ? "show" : ""}`}>
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
