import * as actionTypes from '../actionTypes/sagaHelpers'

export function getCategories() {
  return {type: actionTypes.GET_CATEGORY}
}

export function getCategoriesResponse(resp) {
    return {type: actionTypes.GET_CATEGORY_RESPONSE, resp }
}


export function getAllTasks() {
    return {type: actionTypes.GET_TASKS}
}

export function getAllTasksResponse(resp) {
    return {type: actionTypes.GET_TASKS_RESPONSE, resp }
}

export function getTask(id) {
    return {type: actionTypes.GET_TASK, id:id}
}

export function getNewTask() {
    return {type: actionTypes.GET_NEW_TASK}
}

export function getTaskResponse(resp) {
    return {type: actionTypes.GET_TASK_RESPONSE, resp }
}
