import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div id="login-form-wrap">
          <h2>Welcome to the Would You Rather App</h2>
          <form id="login-form">
            <p>
              <select className="login-select">
                {this.props.usersIds.map(user => (
                  <option key={user}>{user}</option>
                ))}
              </select>
            </p>
            <p>
              <input type="submit" id="login-button" value="Login"></input>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Login);
