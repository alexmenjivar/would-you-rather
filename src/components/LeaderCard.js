import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Divider, Button, Progress } from "antd";

class LeaderBoard extends Component {
  render() {
    const { authedUser, questions, users } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Card
          bordered={true}
          style={{ display: "flex", justifyContent: "flex-start", alignItems: "stretch", width: 500 }}
        >
          <div>
            <Avatar />
            <Divider type="vertical" />
          </div>

          <div>
            <h2>{users[authedUser].name}</h2>
            <p>Answered questions: </p>
            <Divider />
            <p>Unanswered questions: </p>
            <Divider type="vertical" />
          </div>

          <div>
            <Card title="Score">
              <p>10</p>
            </Card>
          </div>
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

export default connect(mapStateToProps)(LeaderBoard);
