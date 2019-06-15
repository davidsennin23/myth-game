import React from 'react';

const styleError = {
    color: "red"
}

const ErrorMessage = ({children}) => <p style={styleError}>{console.log(children)}{children}</p>

export default ErrorMessage;