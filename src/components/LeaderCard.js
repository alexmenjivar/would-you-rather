import React, { Component } from "react";
import { Card, Avatar } from "antd";

class LeaderBoard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card bordered={true} style={{ width: 500 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", alignItems: "center", width: "25%" }}
            >
              <Avatar src={user.avatar} size={128} />
            </div>
            <div style={{ marginLeft: 20, width: "50%" }}>
              <h3>{user.name}</h3>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "85%" }}>Answered Questions:</div>
                <div>{user.questionsAnswered}</div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "85%" }}>Created Questions:</div>
                <div>{user.questionsAsked}</div>
              </div>
            </div>
            <div>
              <Card title="Score" bordered={true} type="inner">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {user.score}
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LeaderBoard;
