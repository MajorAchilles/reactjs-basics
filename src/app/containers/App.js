import React from "react";

import { User } from '../components/User';
import { Main } from '../components/Main';
import { connect } from "react-redux"

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={newName => this.props.setName(newName)}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
