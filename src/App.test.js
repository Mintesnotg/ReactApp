import { render, screen } from '@testing-library/react';
import App from './App';

import Add from './add'

test('renders learn react link', () => {
  render(
  <div>
<App />
<Add/>
  </div>
  
    );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
