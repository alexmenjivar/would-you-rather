import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Progress, Typography } from "antd";

const { Text } = Typography;

class Results extends Component {
  render() {
    const { authedUser, users, optionOne, optionTwo, userVote } = this.props;

    if (!authedUser) return null;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          title={`Asked by ${users[authedUser].name}`}
          style={{ width: 500 }}
          type="inner"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "30%" }}>
              <Avatar src={users[authedUser].avatarURL} size={128} />
            </div>
            <div style={{ marginLeft: 20, width: "70%" }}>
              <h3>Results:</h3>
              <Card
                style={{
                  backgroundColor: userVote === "One" ? "aquamarine" : null,
                }}
                extra={userVote === "One" ? "Your vote" : null}
              >
                <Text strong>{`Would you rather ${optionOne.text}`}</Text>
                <Progress
                  percent={Math.round(
                    (optionOne.votes / (optionOne.votes + optionTwo.votes)) *
                      100
                  )}
                />
                <div>
                  {optionOne.votes} out of {optionOne.votes + optionTwo.votes}{" "}
                  votes
                </div>
              </Card>
              <br />
              <Card
                style={{
                  backgroundColor: userVote === "Two" ? "aquamarine" : null
                }}
                extra={userVote === "Two" ? "Your vote" : null}
              >
                <Text strong>{`Would you rather ${optionTwo.text}`}</Text>
                <Progress
                  percent={Math.round(
                    (optionTwo.votes / (optionOne.votes + optionTwo.votes)) *
                      100
                  )}
                />
                <div>
                  {optionTwo.votes} out of {optionOne.votes + optionTwo.votes}{" "}
                  votes
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  const optionOne = {
    text: questions[questionId].optionOne.text,
    votes: questions[questionId].optionOne.votes.length
  };
  const optionTwo = {
    text: questions[questionId].optionTwo.text,
    votes: questions[questionId].optionTwo.votes.length
  };

  const userVote =
    (questions[questionId].optionOne.votes.includes(authedUser) && "One") ||
    (questions[questionId].optionTwo.votes.includes(authedUser) && "Two");

  return {
    authedUser,
    questions,
    users,
    optionOne,
    optionTwo,
    userVote
  };
}

export default connect(mapStateToProps)(Results);
