import * as React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World ??? </h1>
            </div>
        );
    }
}

(window as any).app = <App/>;
console.log(<App/>);

export default App;

