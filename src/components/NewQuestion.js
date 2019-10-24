import React, { Component } from "react";
import { Card, Input, Divider, Button } from "antd";

class NewQuestion extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          title="Create New Question"
          bordered={true}
          style={{ width: 600 }}
        >
          <h3>Complete the question</h3>
          <h4>Would You Rather...</h4>
          <Input placeholder="Enter Option One Text Here..." />
          <Divider>OR</Divider>
          <Input placeholder="Enter Option Two Text Here..." />
          <br /><br />
          <Button type="primary" block >
            Primary
          </Button>
        </Card>
      </div>
    );
  }
}

export default NewQuestion;
