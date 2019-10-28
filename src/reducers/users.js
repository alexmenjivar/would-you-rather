import { RECEIVE_USERS, INCLUDE_QUESTION_TO_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case INCLUDE_QUESTION_TO_USER:
      const { authedUser, questionId } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([questionId])
        }
      };
    default:
      return state;
  }
}
