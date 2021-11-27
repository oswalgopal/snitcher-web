import {takeEvery} from 'redux-saga/effects';
import {apiConstants} from '../constant/apiConstants';
import { getContestApi, getPlatformApi } from "./apiCallSaga";

function* mySaga() {
  yield takeEvery(apiConstants.GET_PLATFORMS, getPlatformApi);
  yield takeEvery(apiConstants.GET_CONTEST, getContestApi);
}

export default mySaga;
