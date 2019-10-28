import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Button, Form, Radio } from "antd";

class Answer extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { authedUser, users } = this.props;
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <Form style={{ display: "flex", justifyContent: "center" }}>
        <Card
          title={`${users[authedUser].name} asks:`}
          bordered={true}
          style={{ width: 500 }}
          type="inner"
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={users[authedUser].avatarURL} size={128} />
            </div>
            <div style={{ marginLeft: 20 }}>
              <div style={{ fontWeight: "bold" }}>Would you rather</div>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1} style={radioStyle}>
                  Option A
                </Radio>
                <Radio value={2} style={radioStyle}>
                  Option B
                </Radio>
              </Radio.Group>
              <br />
              <Button block>View Poll</Button>
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
