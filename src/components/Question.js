import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Divider, Button } from "antd";

class Question extends Component {
  render() {
    const { answerId, avatar, questions } = this.props;
    console.log(questions);
    return (
      <Card title="Users asks: " bordered={true} style={{ width: 300 }}>
        <Avatar src={avatar.avatarURL} />
        <Divider type="vertical" />
        <span>Would you rather</span>
        <div>{questions[answerId].optionOne.text}</div>
        <Button>View Poll</Button>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(Question);
