import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Divider, Button, Progress } from "antd";

class Results extends Component {
  render() {
    const {authedUser, questions, users} = this.props
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Card title={`Asked by ${users[authedUser].name}`}style={{ width: 500 }}>
        <Avatar src={users[authedUser].avatarURL} />
        <Divider type="vertical" />
        <h3>Results:</h3>
        <span>Would you rather</span>
        <Progress percent={30} />
        </Card>
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

export default connect(mapStateToProps)(Results);