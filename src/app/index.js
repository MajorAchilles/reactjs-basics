import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        const user = {
            name: "max27",
            hobbies: ["Sports", "Movies", "Photography", "Riding"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} age={27} user={user}>
                            <p>That's it, folks!</p>
                        </Home>
                    </div>    
                </div>
            </div>
        );
    }
}

render(<App/>, document.querySelector("#root"));