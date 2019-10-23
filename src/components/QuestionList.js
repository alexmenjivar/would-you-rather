import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Card } from "antd";

class QuestionList extends Component {
  render() {
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 500 }}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Unanswered Questions" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              <ul>
                {this.props.answeredQuestions.map(answer => (
                  <li key={answer}>{answer}</li>
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

  const answeredQuestions =
    users && users[authedUser] && Object.keys(users[authedUser].answers);
  return {
    answeredQuestions: answeredQuestions || []
  };
}

export default connect(mapStateToProps)(QuestionList);
