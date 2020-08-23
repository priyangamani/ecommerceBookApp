import {ADD_TO_CART} from '../constant'

const defaultState = [];
const addCarList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, action.item];
    }
    default:
      return state;
  }
};

export default addCarList;
