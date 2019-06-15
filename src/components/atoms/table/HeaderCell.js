import React from 'react';
import PropTypes from 'prop-types';

const cellHeadStyle = {
    padding: "0em 4em"
}

const HeaderCell = ({children}) => <th style={cellHeadStyle}>{children}</th>


export default HeaderCell;