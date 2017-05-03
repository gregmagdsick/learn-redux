// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of the current state

function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return existing state plus new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
