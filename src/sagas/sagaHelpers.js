import { takeLatest} from "redux-saga";
import {call, put} from "redux-saga/effects"
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

export function* sagaHelperMain() {
    yield [
        takeLatest(actionTypes.GET_CATEGORY, getCategories)
    ]
}