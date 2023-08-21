import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

export default renderWithRouter;
