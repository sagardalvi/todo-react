import {takeLatest, call, put} from "redux-saga/effects"
import * as actionTypes from '../actionTypes/sagaHelpers'
import * as actionCreators from '../actionCreators/sagaHelpers';
import * as url from './apiUrl';

function* getCategories() {
  try {
    let categories = yield call(() => fetch(url.GET_CATEGORY_URL).then(response => response.json()));
    yield put(actionCreators.getCategoriesResponse(categories))
  } catch (error) {
    yield put(actionCreators.getCategoriesResponse(error))
  }
}

function* getTask(action) {
    try {
        let task = yield call(() => fetch(url.GET_TASK_URL(action.id)).then(response => response.json()));
        yield put(actionCreators.getTaskResponse(task))
    } catch (error) {
        yield put(actionCreators.getTaskResponse(error))
    }
}

function* getAllTasks() {
    try {
        let tasks = yield call(() => fetch(url.GET_TASKS_URL).then(response => response.json()));
        let categories = yield call(() => fetch(url.GET_CATEGORY_URL).then(response => response.json()));

        if(tasks){
            tasks.map((task) => {
                let currentTask = task;
                currentTask.category = categories.find(x => x.key === currentTask.category).value;
                return currentTask;
            })
        }

        yield put(actionCreators.getAllTasksResponse(tasks))
    } catch (error) {
        yield put(actionCreators.getAllTasksResponse(error))
    }
}

export function* sagaHelperMain() {
    yield [
        takeLatest(actionTypes.GET_CATEGORY, getCategories),
        takeLatest(actionTypes.GET_TASKS, getAllTasks),
        takeLatest(actionTypes.GET_TASK, getTask)
    ]
}