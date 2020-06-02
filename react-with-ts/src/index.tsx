import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    colour: string   
}

class App extends React.Component<AppProps> {
    render() {
        return <div>{ this.props.colour }</div>
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App colour="red" />
    </React.StrictMode>,
    document.querySelector('#root')
);
