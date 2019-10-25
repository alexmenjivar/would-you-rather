import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";

class LeaderBoard extends Component {
  render() {
    const { users, questions, user } = this.props;

    const answeredQuestions =
      users && users[user] && Object.keys(users[user].answers);

    const unansweredQuestions =
      questions &&
      answeredQuestions &&
      Object.keys(questions).filter(function(question) {
        return !answeredQuestions.some(function(answered) {
          return question === answered;
        });
      });
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card bordered={true} style={{ width: 500 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", alignItems: "center", width: "25%" }}
            >
              <Avatar src={users[user].avatarURL} size={128} />
            </div>
            <div style={{ marginLeft: 20, width: "50%" }}>
              <h3>{users[user].name}</h3>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "85%" }}>Answered Questions</div>
                <div>{answeredQuestions.length}</div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "85%" }}>Unanswered Questions</div>
                <div>{unansweredQuestions.length}</div>
              </div>
            </div>
            <div>
              <Card title="Score" bordered={true} type="inner">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {answeredQuestions.length + unansweredQuestions.length}
                </div>
              </Card>
            </div>
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
