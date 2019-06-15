import React from 'react';
import errorCatcher from '../../../model/errors/ErrorCatcher';

const errorReceiver = (errorName) => (Class) =>
    class extends React.Component {

        state = {
            errorObserver: undefined,
            message: ""
        }

        componentDidMount = () => {
            let observer = errorCatcher.registerErrorObjservers(errorName, this.messageChange);
            this.setState({errorObserver: observer});
        }

        messageChange = (message) => this.setState({message})

        componentWillUnmount = () => {
            this.state.errorObserver.unsubscribe();
        }

        render() {
            const {message} = this.state;
            console.log(message);
            return (
                <Class message={message} {...this.props}></Class>
            )
        }

    }


export default errorReceiver;