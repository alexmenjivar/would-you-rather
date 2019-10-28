import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { Menu, Avatar } from "antd";

class Nav extends Component {
  render() {
    const { avatar, userName, dispatch } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <Menu mode="horizontal" style={{ display: "flex" }}>
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

        {userName && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: 47,
              display: "flex",
              alignItems: "center"
            }}
          >
            <div style={{ paddingRight: 20 }}>{userName}</div>
            <div>
              <Avatar src={avatar} />
            </div>
            <Link to="/login" onClick={() => {
              dispatch(setAuthedUser(null))
            }}>
              <div style={{ paddingLeft: 20, paddingRight: 20 }}>Log out</div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatar: users[authedUser] && users[authedUser].avatarURL,
    userName: users[authedUser] && users[authedUser].name
  };
}

export default connect(mapStateToProps)(Nav);
