import React, { useState } from 'react';
import "./Popup.css";

const Popup = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="popup-container container">
            <button onClick={() => setVisible(true)}>Show Pop-up</button>
            {visible && (
                <>
                    <div className="overlay" onClick={() => setVisible(false)}></div>
                    <div className="popup">
                        <p>This is my pop-up message</p>
                        <button onClick={() => setVisible(false)}>X</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Popup;
