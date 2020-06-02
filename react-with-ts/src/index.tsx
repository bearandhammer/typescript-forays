import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    colour: string
}

interface AppState {
    counter: number
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 };
    }   

    // Arrow functions - want to make sure these are bound (no 'contextual' issues in play!)
    onIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    onDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={ this.onIncrement }>Increment</button>
                <button onClick={ this.onDecrement }>Decrement</button>
                { this.state.counter }
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App colour="red" />
    </React.StrictMode>,
    document.querySelector('#root')
);
