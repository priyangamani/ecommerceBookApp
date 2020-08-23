import {FETCHING_BOOK_LIST,FETCHING_BOOK_LIST_SUCCESS,FETCHING_BOOK_LIST_FAILURE} from '../constant'

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_BOOK_LIST:
      return {
        ...state,
        data: action.data,
        isFetching: true
      }
    case FETCHING_BOOK_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_BOOK_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
