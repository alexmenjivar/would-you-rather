import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Avatar, Button } from "antd";

class Question extends Component {
  render() {
    const { answerId, author, questions, users } = this.props;
    return (
      <Card
        title={`${users[author].name} asks:`}
        bordered={true}
        style={{ width: "100%" }}
        type="inner"
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={users[author].avatarURL} size={128} />
          </div>
          <div style={{ marginLeft: 20 }}>
            <div style={{ fontWeight: "bold" }}>Would you rather</div>
            <div>{questions[answerId].optionOne.text}</div>
            <br />
            <Link to={`/questions/${answerId}`}>
              <Button block>View Poll</Button>
            </Link>
          </div>
        </div>
      </Card>
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

export default connect(mapStateToProps)(Question);
