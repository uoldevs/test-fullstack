import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText('Painel de Clientes');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the user icon image', () => {
    const { getByAltText } = render(<Header />);
    const imageElement = getByAltText('userIcon');
    expect(imageElement).toBeInTheDocument();
  });
});
