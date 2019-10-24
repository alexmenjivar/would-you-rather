import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Avatar, Typography } from "antd";

const {Text } = Typography;

class Nav extends Component{
  render(){
    const {authedUser} = this.props
    return (
      <Menu mode="horizontal">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>New Question</Menu.Item>
        <Menu.Item>LeaderBoard</Menu.Item>
        <Avatar />
        <span> </span>
        <Text>{authedUser}</Text>
      </Menu>
    );
  } 
}

function mapStateToProps({ authedUser}) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);