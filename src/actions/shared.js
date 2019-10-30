import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {
  receiveUsers,
  includeQuestionToUser,
  includeAnswerToUser
} from "../actions/users";
import {
  receiveQuestions,
  createQuestion,
  addAnswer
} from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

//const AUTHED_ID = "johndoe";
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
      optionOneText: optionOne,
      optionTwoText: optionTwo,
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

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser,
      qid,
      answer
    };
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addAnswer(info));
        dispatch(includeAnswerToUser(info));
      })
      .then(() => dispatch(hideLoading()));
  };
}
