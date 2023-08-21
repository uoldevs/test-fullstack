import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To extend Jest's DOM testing functions
import PageHeader from './PageHeader';

describe('PageHeader component', () => {
  it('renders without errors', () => {
    render(<PageHeader />);
  });

  it('displays the UOL logo', () => {
    const { getByAltText } = render(<PageHeader />);
    const logoElement = getByAltText('uol logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('has the correct attributes for the UOL logo', () => {
    const { getByAltText } = render(<PageHeader />);
    const logoElement = getByAltText('uol logo');
    
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('alt', 'uol logo');
    expect(logoElement).toHaveAttribute('width', '80');
    expect(logoElement).toHaveAttribute('height', '80');
  });

  it('has the correct classNames', () => {
    const { container } = render(<PageHeader />);
    const headerElement = container.firstChild;

    expect(headerElement).toHaveClass('flex justify-center bg-black');
  });
});
