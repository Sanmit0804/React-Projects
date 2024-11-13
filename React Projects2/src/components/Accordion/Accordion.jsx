import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const accordionData = [
    { id: 1, title: "Accordion 1", detail: "This is detail for Accordion 1" },
    { id: 2, title: "Accordion 2", detail: "This is detail for Accordion 2" },
    { id: 3, title: "Accordion 3", detail: "This is detail for Accordion 3" },
    { id: 4, title: "Accordion 4", detail: "This is detail for Accordion 4" },
  ];

  const [openSections, setOpenSections] = useState([]);

  const toggleDetail = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div className="main" onClick={() => toggleDetail(index)}>
            {item.title}
          </div>
          <div className={`detail ${openSections.includes(index) ? "show" : ""}`}>
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;