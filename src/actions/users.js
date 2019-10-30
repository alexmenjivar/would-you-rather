export const RECEIVE_USERS = "RECEIVE_USERS";
export const INCLUDE_QUESTION_TO_USER = 'INCLUDE_QUESTION_TO_USER'
export const INCLUDE_ANSWER_TO_USER = 'INCLUDE_ANSWER_TO_USER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function includeQuestionToUser({authedUser, questionId}){
    return{
        type: INCLUDE_QUESTION_TO_USER,
        authedUser,
        questionId
    }
}

export function includeAnswerToUser({authedUser, qid, answer}){
  return {
    type: INCLUDE_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  }
}
