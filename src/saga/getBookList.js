import { FETCHING_BOOK_LIST, FETCHING_BOOK_LIST_SUCCESS, FETCHING_BOOK_LIST_FAILURE } from '../constant'
import { call, put, take } from 'redux-saga/effects';
import { getBookList } from '../service/api';


function* getBookResultList() {
   const action = yield take(FETCHING_BOOK_LIST);
   const params = action.payload;
   try {
      const data = yield call(getBookList, params);
      yield put({ type: FETCHING_BOOK_LIST_SUCCESS, data });
   }
   catch (e) {
      yield put({ type: FETCHING_BOOK_LIST_FAILURE })
   }
}


export default getBookResultList