import { getInitialData, saveQuestion } from "../utils/api";
import { receiveUsers, includeQuestionToUser } from "../actions/users";
import { receiveQuestions, createQuestion } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

//const AUTHED_ID = 'johndoe'
const AUTHED_ID = null;

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleCreateQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOne: optionOne,
      optionTwo: optionTwo,
      author: authedUser
    })
      .then(question => {
        dispatch(createQuestion(question));
        dispatch(
          includeQuestionToUser({
            authedUser,
            questionId: question.id
          })
        );
      })
      .then(() => dispatch(hideLoading()));
  };
}
