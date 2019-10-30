import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";
import { Card, Avatar, Button, Form, Radio } from "antd";

class Answer extends Component {
  state = {
    answer: null
  };

  onChange = e => {
    const answer = e.target.value;
    this.setState({
      answer
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { answer } = this.state;
    const { dispatch, questionId } = this.props;
    dispatch(handleAddAnswer(questionId, answer));
  };

  render() {
    const { authedUser, users, questions, questionId } = this.props;
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    if (!authedUser) return null;
    return (
      <Form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={this.handleSubmit}
      >
        <Card
          title={`${users[authedUser].name} asks:`}
          bordered={true}
          style={{ width: 500 }}
          type="inner"
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", alignItems: "center", width: "30%" }}
            >
              <Avatar src={users[authedUser].avatarURL} size={128} />
            </div>
            <div style={{ marginLeft: 20, width: "70%" }}>
              <div style={{ fontWeight: "bold" }}>Would you rather</div>
              <Form.Item>
                <Radio.Group onChange={this.onChange} value={this.state.answer}>
                  <Radio value="optionOne" style={radioStyle}>
                    {questions[questionId].optionOne.text}
                  </Radio>
                  <Radio value="optionTwo" style={radioStyle}>
                    {questions[questionId].optionTwo.text}
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
              </Form.Item>
            </div>
          </div>
        </Card>
      </Form>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  //const userQuestions = Object.keys(users[authedUser].questions)

  return {
    authedUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(Answer);
