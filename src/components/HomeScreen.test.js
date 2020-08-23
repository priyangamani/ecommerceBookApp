import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react'
import {
  Link,
} from 'react-router-dom';


test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Link to="/detailScreen">BUY NOW</Link>
    </MemoryRouter>
  );
  fireEvent.click(getByText('BUY NOW'));
});



