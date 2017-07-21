import {sagaHelperMain} from './sagaHelpers'

export default function* rootSaga() {

  yield  [
      sagaHelperMain()
  ]
}

