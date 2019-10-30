import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Result, Button } from "antd";

class NotFound extends Component {
  state = {
    toHome: false
  };

  handleClick = e => {
    this.setState(() => ({
      toHome: true
    }));
  };

  render() {
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={this.handleClick}>Back Home</Button>}
      />
    );
  }
}

export default NotFound;
