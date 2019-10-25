import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

class Nav extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" style={{ display: "flex"}}>
          <Menu.Item>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/new" exact>
              New Question
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/leaderboard" exact>
              LeaderBoard
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
