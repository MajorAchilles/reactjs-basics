import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!! I am alive!!!!!</h1>
            </div>
        );
    }
}

render(<App/>, document.querySelector("#root"));