import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
    marginRight: "10px",
    fontSize: "1.5em",
    marginLeft: "2px"
}

const Display = ({label, children}) => <><label>{label}</label>:<span style={displayStyle}>{children}</span></>

Display.propTypes = {
    label: PropTypes.string.isRequired
}

export default Display;