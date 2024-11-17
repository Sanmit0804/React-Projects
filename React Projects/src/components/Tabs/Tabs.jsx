import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="tab-container">
    <div className="buttons">
        <div className="tab1" onClick={() => setActiveTab("tab1")}>Tab 1</div>
        <div className="tab2" onClick={()=> setActiveTab("tab2")}>Tab 2</div>
        <div className="tab3" onClick={() => setActiveTab("tab3")}>Tab 3</div>
    </div>
      {activeTab=="tab1" && <div> Tab 1 is activated..!!</div>}
      {activeTab=="tab2" && <div> Tab 2 is activated..!!</div>}
      {activeTab=="tab3" && <div> Tab 3 is activated..!!</div>}
    </div>
  );
};

export default Tabs;
