import {FETCHING_BOOK_LIST,ADD_TO_CART} from '../constant'

export const addToCart = (item) => (
  {
    type: ADD_TO_CART,
    item
  }
);

export const getBookItems = (data) => (
  {
    type: FETCHING_BOOK_LIST,
    data,
  }
);




