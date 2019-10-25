import React, { Component } from "react";
import { Card, Input, Divider, Button } from "antd";

class NewQuestion extends Component {
  state = {
    query1: "",
    query2: ""
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
  };
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
          <Input
            placeholder="Enter Option One Text Here..."
            onChange={event => this.updateQuery(event.target.value)}
          />
          <Divider>OR</Divider>
          <Input placeholder="Enter Option Two Text Here..." />
          <br />
          <br />
          <Button type="primary" block>
            Submit
          </Button>
        </Card>
      </div>
    );
  }
}

export default NewQuestion;
