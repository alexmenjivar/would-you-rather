import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Tabs, Card } from "antd";

class QuestionList extends Component {
  render() {
    const { TabPane } = Tabs;
    const { users, questions } = this.props;

    console.log(users);

    function callback(key) {
      console.log(key);
    }
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 500 }}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Unanswered Questions" key="1">
              {this.props.unansweredQuestions.map(answer => (
                <li key={answer}>
                  <Question answerId={answer} author={questions[answer].author} />
                </li>
              ))}
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              <ul>
                {this.props.answeredQuestions.map(answer => (
                  <li key={answer}>
                    <Question answerId={answer} author={questions[answer].author} />
                  </li>
                ))}
              </ul>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestions = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestions =
    Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp).filter(function(question) {
      return !answeredQuestions.some(function(answered) {
        return question === answered;
      });
    });

  return {
    answeredQuestions: answeredQuestions || [],
    unansweredQuestions: unansweredQuestions || [],
    authedUser,
    users, 
    questions
  };
}

export default connect(mapStateToProps)(QuestionList);
