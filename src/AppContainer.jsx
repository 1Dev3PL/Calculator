import React from 'react';
import App from "./App";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        };
    }

    onNumButtonClick = (e) => {
        this.setState({
            output: this.state.output + e.currentTarget.value
        })
    };

    onOpButtonClick = (e) => {
        this.setState({output: this.state.output + e.currentTarget.value})
    };

    count = () => {
        try {
            let result = eval(this.state.output.toString());

            if (result === Infinity || result === -Infinity || isNaN(result)) {
                this.setState({output: 'Error'})
            } else {
                this.setState({output: result.toString()})
            }
        } catch {
            this.setState({output: 'Error'})
        }
    };

    clear = () => {
        this.setState({
            output: this.state.output.slice(0, -1),
        });
    };

    clearEvery = () => {
        this.setState({output: ''})
    };

    render() {
        return (
            <App onNumButtonClick={this.onNumButtonClick}
                 onOpButtonClick={this.onOpButtonClick}
                 count={this.count}
                 clear={this.clear}
                 clearEvery={this.clearEvery}
                 output={this.state.output}
                 isDisabled={this.state.isDisabled}/>
        )
    }
}

export default AppContainer;