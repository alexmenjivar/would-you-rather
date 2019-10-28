import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, Select, Button, Form } from "antd";
import { setAuthedUser } from "../actions/authedUser";

const { Option } = Select;

class Login extends Component {
  state = {
    user: "",
    toHome: false
  };

  handleChange = value => {
    this.setState({
      user: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(user));

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
        <Card title="Would you rather App">
          <Form.Item>
            <Select
              style={{ width: "100%" }}
              onChange={this.handleChange}
              value={this.state.user}
            >
              {this.props.usersIds.map(user => (
                <Option key={user} value={user}>
                  {user}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Card>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Login);
