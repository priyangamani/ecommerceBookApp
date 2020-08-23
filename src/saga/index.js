import { all } from "redux-saga/effects";
import getBookList from "./getBookList";

function* rootSaga() {
  yield all([
    getBookList()
  ]);
}

export default rootSaga;