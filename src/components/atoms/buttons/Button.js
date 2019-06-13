import React from 'react';
import PropTypes from 'prop-types'

const buttonStyle = {
    fontSize: "1.2em",
    padding: ".3em 1em"
}

const Button = ({children, onClick}) => <button onClick={onClick} style={buttonStyle}>{children}</button>

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    text: 'Click me'
}

export default Button;