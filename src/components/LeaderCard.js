import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Button, Col, Row } from "antd";

class LeaderBoard extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card title={`${users[authedUser].name} asks:`} bordered={true} style={{ width: 500 }} type="inner">
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={users[authedUser].avatarURL} size={128} />
            </div>
            <div style={{ marginLeft: 20 }}>
              <div>NAME</div>
              <div style={{ fontWeight: 'bold' }}>Would you rather</div>
              <br />
              <Row>
                <Col span={12}>Answered Questions</Col>
                <Col span={12}>10</Col>
              </Row>
              <Row>
                <Col span={12}>Unanswered Questions</Col>
                <Col span={12}>5</Col>
              </Row>
              <Button block>View Poll</Button>
            </div>
            <div>
              <Card title="Score" bordered={true} style={{ width: '100%' }} type="inner">
                10
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
