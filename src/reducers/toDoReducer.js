import * as actionTypes from '../actionTypes/sagaHelpers';

export default (prevState = {}, action={}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_CATEGORY_RESPONSE:
      return Object.assign({}, prevState, {isFetching: false}, {categories: action.resp});
    case actionTypes.GET_TASKS:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_TASKS_RESPONSE:
      return Object.assign({}, prevState, {isFetching: false}, {tasks: action.resp,task:undefined});
    case actionTypes.GET_NEW_TASK:
      return Object.assign({}, prevState, {isFetching: true} , {task:undefined});
    case actionTypes.GET_TASK:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_TASK_RESPONSE:
      return Object.assign({}, prevState, {isFetching: false}, {task: action.resp});
    default:
      return prevState;
  }
}