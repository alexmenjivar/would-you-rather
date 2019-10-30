import {
  RECEIVE_USERS,
  INCLUDE_QUESTION_TO_USER,
  INCLUDE_ANSWER_TO_USER
} from "../actions/users";

export default function users(state = {}, action) {
  const { qid, answer, authedUser } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case INCLUDE_QUESTION_TO_USER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([qid])
        }
      };
    case INCLUDE_ANSWER_TO_USER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
