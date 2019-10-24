import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Divider, Button, Progress } from "antd";

class LeaderBoard extends Component {
  render() {
    return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);