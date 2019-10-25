import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "antd";

class Nav extends Component{
  render(){
    return (
      <div>
      <Menu mode="horizontal">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>New Question</Menu.Item>
        <Menu.Item>LeaderBoard</Menu.Item>
      </Menu>
      </div>
    );
  } 
}

function mapStateToProps({ authedUser}) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);