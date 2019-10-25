import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Select, Button, Form } from 'antd'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Login extends Component {

  render() {
    return (
      <Form style={{ display: "flex", justifyContent: "center" }}>
        <Card title="Would you rather App">
          <Form.Item>
            <Select defaultValue="sarahedo" style={{ width: '100%'}} onChange={handleChange}>
              {this.props.usersIds.map(user => (
                <Option key={user}>{user}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block>
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
