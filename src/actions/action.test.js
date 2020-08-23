
import {addToCart,getBookItems} from './actions'

test('renders addToCart', () => {
  expect(addToCart('1234')).toBeDefined();
});

test('renders getBookItems', () => {
  expect(getBookItems('1234')).toBeDefined();
});
