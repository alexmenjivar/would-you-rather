import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleCreateQuestion } from "../actions/shared";
import { Form, Card, Input, Divider, Button } from "antd";

class NewQuestion extends Component {
  state = {
    textInput1: "",
    textInput2: "",
    toHome: false
  };

  updateInputOne = e => {
    this.setState({
      textInput1: e.target.value
    });
  };

  updateInputTwo = e => {
    this.setState({
      textInput2: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { textInput1, textInput2 } = this.state;
    const { dispatch } = this.props;

    dispatch(handleCreateQuestion(textInput1, textInput2));

    this.setState({
      toHome: true
    });
  };

  render() {
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <Form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={this.handleSubmit}
      >
        <Card
          title="Create New Question"
          bordered={true}
          style={{ width: 600 }}
        >
          <h3>Complete the question</h3>
          <h4>Would You Rather...</h4>
          <Input
            placeholder="Enter Option One Text Here..."
            value={this.state.textInput1}
            onChange={this.updateInputOne}
          />
          <Divider>OR</Divider>
          <Input
            placeholder="Enter Option Two Text Here..."
            value={this.state.textInput2}
            onChange={this.updateInputTwo}
          />
          <br />
          <br />
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Card>
      </Form>
    );
  }
}

export default connect()(NewQuestion);
