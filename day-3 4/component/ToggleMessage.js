import React, { useState } from "react";

function ToggleMessage() {
    const [showMessage, setShowMessage]=useState(false);
    const toggleMessage =()=>
    {
        setShowMessage(!showMessage);
    };

    return(
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={toggleMessage}>{showMessage ? "Hide Message" :"Show message"}</button>
            { showMessage &&<p>Hi! how are you?</p>}
        </div>
    )
}
export default ToggleMessage;