import React from 'react';

const errorPanelStyle = {
    width: "720px",
    margin: "2em auto",
}

const ErrorPanel = ({ErrorDisplay, message}) => 
    <div style={errorPanelStyle}>
        <ErrorDisplay>{message}</ErrorDisplay>
    </div>

export default ErrorPanel;