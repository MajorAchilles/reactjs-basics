import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, index) => <li key={`key:${index}`}>{hobby}</li> )}
                    </ul>
                </div>
                <hr/>
                { this.props.children }
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};