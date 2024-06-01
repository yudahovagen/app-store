import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import watchAppDataFetcher from "./appDataFetcher";

function* rootSaga(): SagaIterator {
  yield all([fork(watchAppDataFetcher)]);
}

export default rootSaga;
