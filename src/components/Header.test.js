import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react'
import {
  Link,
} from 'react-router-dom';


test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Link to="/detailScreen">My Orders</Link>
    </MemoryRouter>
  );
  fireEvent.click(getByText('My Orders'));
});

test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Link to="/homeScreen">Home</Link>
    </MemoryRouter>
  );
  fireEvent.click(getByText('Home'));
});


test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Link to="/myorderScreen">Cart</Link>
    </MemoryRouter>
  );
  fireEvent.click(getByText('Cart'));
});

