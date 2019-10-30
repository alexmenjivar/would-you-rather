import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderCard from './LeaderCard'

class LeaderBoard extends Component {
  render() {

    const { users } = this.props;
    const usersSorted = Object.values(users)
      .map(user => ({
        name: user.name,
        avatar: user.avatarURL,
        questionsAsked: user.questions.length,
        questionsAnswered: Object.keys(user.answers).length,
        score: user.questions.length + Object.keys(user.answers).length
      }))
      .sort((a, b) => b.score - a.score);

    return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
      {usersSorted.map((user, index) => 
        <li key={index}>
          <LeaderCard user={user}/>
        </li>
      )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {

  return {
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);