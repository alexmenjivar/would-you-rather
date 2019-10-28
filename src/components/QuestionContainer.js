import React, { Component } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";
import Results from "./Results";
import { Redirect } from "react-router-dom";

class QuestionContainer extends Component {
  render() {
    const { questions, users, authedUser, match } = this.props;
    const questionId = match.params.question_id;

    if (questions[questionId] === undefined) {
      return <Redirect to={"/notfound"} />;
    }

    const theUserAlreadyAnswered =
      questions[questionId].optionOne.votes.includes(authedUser) ||
      questions[questionId].optionTwo.votes.includes(authedUser);

    return <div>{theUserAlreadyAnswered ? <Answer /> : <Results />}</div>;
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(QuestionContainer);
