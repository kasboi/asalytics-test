// __tests__/index.test.js

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

// Test to check if the h1 tag is rendered
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "List of Algorand Standard Assets on ASAlytics",
    })

    expect(heading).toBeInTheDocument()
  })
});