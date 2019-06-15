import React from 'react';
import CardTable from './CardTable';
import ErrorPanel from '../../molecules/display-panel/ErrorPanel';
import ErrorMessage from '../../atoms/texts/ErrorMessage';
import errorReceiver from '../../hoc/errors/ErrorReceiver';

const contentStyle = {
    width: "70%",
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}

const ErrorPanelMessage = errorReceiver("card-gen")(ErrorPanel);
// style={{visibility: message ? "visible" : "hidden"}}
const Content = () =>  
    <div style={contentStyle}>
        <div >
            <ErrorPanelMessage ErrorDisplay={ErrorMessage} ></ErrorPanelMessage>
        </div>
        <CardTable></CardTable>
    </div>

export default Content;