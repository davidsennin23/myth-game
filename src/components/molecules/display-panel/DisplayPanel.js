import React from 'react';

const displayPanelStyle = {
    height: "100%",
    width: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "left"
}

const DisplayPanel = ({children}) => 
    <div style={displayPanelStyle}>
        {children}
    </div>

export default DisplayPanel;