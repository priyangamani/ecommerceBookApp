import { combineReducers } from 'redux'
import bookData from './bookList'
import addCart from './addCart';


const rootReducer = combineReducers({
    bookData,
    addCart,
})

export default rootReducer;