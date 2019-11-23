import React from 'react';
import App from "./App";

class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullOutput: '',
            numOutput: ''
        };
    }

    onNumButtonClick = (e) => {
        this.setState({fullOutput: this.state.fullOutput + e.currentTarget.value, numOutput: this.state.numOutput + e.currentTarget.value})
    };

    onOpButtonClick = (e) => {
        this.setState({fullOutput: this.state.fullOutput + e.currentTarget.value, numOutput: ''})
    };

    count = () => {
        let result = eval(this.state.fullOutput).toString();
        if (result === 'Infinity' || result === '-Infinity' || result === 'NaN') {
            this.setState({fullOutput: '', numOutput: 'Error'})
        } else {
            this.setState({fullOutput: result, numOutput: result});
        }
    };

    clear = () => {
        this.setState({fullOutput: this.state.fullOutput.slice(0, - 1),
            numOutput: this.state.numOutput.slice(0, -1)})
    };

    clearEvery = () => {
        this.setState({fullOutput: '', numOutput: ''})
    };

    render() {
        return(
            <App onNumButtonClick={this.onNumButtonClick}
                 onOpButtonClick={this.onOpButtonClick}
                 count={this.count}
                 clear={this.clear}
                 clearEvery={this.clearEvery}
                 fullOutput={this.state.fullOutput}
                 numOutput={this.state.numOutput}/>
        )
    }
}

export default AppContainer;