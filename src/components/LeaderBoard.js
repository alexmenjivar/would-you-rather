import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderCard from './LeaderCard'

class LeaderBoard extends Component {
  render() {

    const {userList} = this.props

    return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
      {userList.map((user) => 
        <li key={user}>
          <LeaderCard user={user}/>
        </li>
      )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {

  const userList = Object.keys(users)
  return {
    authedUser,
    questions,
    users,
    userList
  };
}

export default connect(mapStateToProps)(LeaderBoard);